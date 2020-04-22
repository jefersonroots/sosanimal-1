package br.com.slogcorp.ws.rest.service;

import br.com.slogcorp.ws.rest.model.User;

import java.util.Optional;

public interface UserService {
    void create(User user);

    Optional<User> findForLoginAndPassword(String login, String password);
}
