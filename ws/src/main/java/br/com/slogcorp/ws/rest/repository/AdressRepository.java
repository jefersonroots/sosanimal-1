package br.com.slogcorp.ws.rest.repository;


import br.com.slogcorp.ws.rest.model.Adress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdressRepository extends JpaRepository<Adress, Integer> {

    Adress findByCepAndStreetAndNumber(Integer cep, String street, Integer number);
}
