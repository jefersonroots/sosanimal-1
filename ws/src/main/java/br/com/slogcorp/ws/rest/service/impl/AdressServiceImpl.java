package br.com.slogcorp.ws.rest.service.impl;

import br.com.slogcorp.ws.rest.client.ViaCepClient;
import br.com.slogcorp.ws.rest.dto.AdressDTO;
import br.com.slogcorp.ws.rest.exception.AdressException;
import br.com.slogcorp.ws.rest.model.Adress;
import br.com.slogcorp.ws.rest.repository.AdressRepository;
import br.com.slogcorp.ws.rest.service.AdressService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.Optional;

import static br.com.slogcorp.ws.rest.util.AdressUtils.parseCepForInteger;

@Service
public class AdressServiceImpl implements AdressService {

    private AdressRepository adressRepository;

    public AdressServiceImpl(AdressRepository adressRepository) {
        this.adressRepository = adressRepository;
    }

    @Override
    public Adress findOrSave(Adress adress) {
        Adress newAdress = adressRepository.findByCepAndStreetAndNumber(adress.getCep(),
                adress.getStreet(), adress.getNumber());

        if (newAdress == null) newAdress = adressRepository.save(adress);

        return newAdress;
    }

    @Override
    public Adress findByCep(String cep) {
        try {
            Optional<AdressDTO> adressDTO = ViaCepClient.findByCep(cep);
            Adress adress = new Adress();
            if (adressDTO.isPresent()) {
                adress.setCep(parseCepForInteger(adressDTO.get().getCep()));
                adress.setCity(adressDTO.get().getLocalidade());
                adress.setStreet(adressDTO.get().getLogradouro());
                adress.setDistrict(adressDTO.get().getBairro());
                return adress;
            } else {
                throw new AdressException("Ocorreu um erro ao buscar os dados referente ao CEP [".concat(cep).concat("]"));
            }
        } catch (HttpClientErrorException ex) {
            throw new AdressException("CEP Inválido!");
        }
    }
}
