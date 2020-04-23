package br.com.slogcorp.ws.rest.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
public class AuthenticationException extends IllegalArgumentException {

    public AuthenticationException(String message) {
        super(message);
    }
}
