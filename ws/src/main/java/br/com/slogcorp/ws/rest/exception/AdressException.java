package br.com.slogcorp.ws.rest.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class AdressException extends IllegalArgumentException {

    public AdressException(String message) {
        super(message);
    }
}
