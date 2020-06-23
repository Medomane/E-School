package backend.Repository;

import backend.Model.Person;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RepositoryRestResource
public interface PersonRepository extends PersonBaseRepository<Person> {

}
