package br.com.slogcorp.ws.rest.service.impl;

import br.com.slogcorp.ws.rest.model.User;
import br.com.slogcorp.ws.rest.repository.UserRepository;
import br.com.slogcorp.ws.rest.service.AdressService;
import br.com.slogcorp.ws.rest.service.UserService;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private AdressService adressService;
    private UserRepository userRepository;

    public UserServiceImpl(AdressService adressService,
                           UserRepository userRepository) {
        this.adressService = adressService;
        this.userRepository = userRepository;
    }

    @Override
    public void create(User user) {
        user.setAdress(adressService.findOrSave(user.getAdress()));
        user.setPassword(getEncryptoPassword(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public Optional<User> findForLoginAndPassword(String login, String password) {
        return userRepository.findByLoginAndPassword(login, getEncryptoPassword(password));
    }

    private String getEncryptoPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(password.getBytes());
            byte[] hashMd5 = md.digest();
            return stringHexa(hashMd5);
        } catch (NoSuchAlgorithmException ex) {
            ex.getMessage();
        }
        return password;
    }

    private String stringHexa(byte[] bytes) {
        StringBuilder s = new StringBuilder();
        for (byte aByte : bytes) {
            int parteAlta = ((aByte >> 4) & 0xf) << 4;
            int parteBaixa = aByte & 0xf;
            if (parteAlta == 0) s.append('0');
            s.append(Integer.toHexString(parteAlta | parteBaixa));
        }
        return s.toString();
    }
}
