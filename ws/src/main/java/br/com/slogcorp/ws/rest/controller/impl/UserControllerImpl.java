package br.com.slogcorp.ws.rest.controller.impl;

import br.com.slogcorp.ws.rest.controller.UserController;
import br.com.slogcorp.ws.rest.model.User;
import br.com.slogcorp.ws.rest.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserControllerImpl implements UserController {

    private UserService userService;

    public UserControllerImpl(UserService userService) {
        this.userService = userService;
    }

    @Override
    @PostMapping("/create")
    public void create(@RequestBody User user) {
        userService.create(user);
    }

}
