package br.com.slogcorp.ws.rest.client;

import br.com.slogcorp.ws.rest.dto.AdressDTO;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Optional;

public class ViaCepClient {

    public static Optional<AdressDTO> findByCep(String cep) {

        RestTemplate template = new RestTemplate();

        UriComponents uri = UriComponentsBuilder.newInstance()
                .scheme("http")
                .host("viacep.com.br")
                .path("ws/")
                .path(cep.concat("/"))
                .path("json/")
                .build();

        return Optional.ofNullable(template.getForObject(uri.toUriString(), AdressDTO.class));
    }
}
