package br.com.slogcorp.ws.rest.dto;

import lombok.Getter;

@Getter
public class AuthenticateDTO {
    private String login;
    private String password;
}
