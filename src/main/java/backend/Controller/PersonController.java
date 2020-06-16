package backend.Controller;

import backend.Model.Person;
import backend.Repository.PersonRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class PersonController {
    final PersonRepository personRepository;
    public PersonController(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @GetMapping("/login/{email}/{password}")
    public Long login(@PathVariable String email,@PathVariable String password) {
        Person person = personRepository.getPersonByEmailAndPassword(email,password);
        return person!=null?person.getId():null;
    }
}
