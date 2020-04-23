package br.com.slogcorp.ws.rest.controller.impl;

import br.com.slogcorp.ws.rest.controller.AdressController;
import br.com.slogcorp.ws.rest.model.Adress;
import br.com.slogcorp.ws.rest.service.AdressService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/adress")
public class AdressControllerImpl implements AdressController {

    private AdressService adressService;

    public AdressControllerImpl(AdressService adressService) {
        this.adressService = adressService;
    }

    @Override
    @GetMapping("/findByCep")
    public ResponseEntity<Adress> findByCep(@RequestParam String cep) {
        return ResponseEntity.ok(adressService.findByCep(cep));
    }
}
