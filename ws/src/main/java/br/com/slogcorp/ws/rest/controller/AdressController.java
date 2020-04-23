package br.com.slogcorp.ws.rest.controller;

import br.com.slogcorp.ws.rest.model.Adress;
import org.springframework.http.ResponseEntity;

public interface AdressController {
    ResponseEntity<Adress> findByCep(String cep);
}
