package br.com.slogcorp.ws.rest.service.impl;

import br.com.slogcorp.ws.rest.model.Adress;
import br.com.slogcorp.ws.rest.repository.AdressRepository;
import br.com.slogcorp.ws.rest.service.AdressService;
import org.springframework.stereotype.Service;

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
}
