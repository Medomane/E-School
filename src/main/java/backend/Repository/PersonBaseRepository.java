package backend.Repository;

import backend.Model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@NoRepositoryBean
@CrossOrigin("*")
@RepositoryRestResource
public interface PersonBaseRepository<T extends Person> extends JpaRepository<T, Long> {
    public T findByEmail(String email);
}
