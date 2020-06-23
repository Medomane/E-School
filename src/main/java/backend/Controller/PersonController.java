package backend.Controller;

import backend.Model.Person;
import backend.Repository.PersonRepository;
import org.springframework.http.HttpHeaders;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.Objects;

@RestController
@CrossOrigin("*")
public class PersonController {
    final PersonRepository personRepository;
    public PersonController(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }
    @GetMapping("/person/login")
    public Person login(@RequestHeader HttpHeaders headers) {
        String info = headers.getFirst(HttpHeaders.AUTHORIZATION).split(" ")[1];
        String val = new String(Base64.getDecoder().decode(Objects.requireNonNull(info)));
        String email = val.split(":")[0], password = val.split(":")[1];
        Person user = personRepository.findByEmail(email);
        return (new BCryptPasswordEncoder().matches(password,user.getPassword())) ? user : null;
    }
}