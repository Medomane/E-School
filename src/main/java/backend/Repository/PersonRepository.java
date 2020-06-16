package backend.Repository;

import backend.Model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin("*")
public interface PersonRepository extends JpaRepository<backend.Model.Person,Long> {
    Person getPersonByEmailAndPassword(String email,String password);
}
