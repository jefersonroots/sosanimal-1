package br.com.slogcorp.ws.rest.service;

import br.com.slogcorp.ws.rest.dto.UserDTO;

public interface AuthenticationService {
    UserDTO authenticate(String login, String password);
}
