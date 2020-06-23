package backend.Repository;

import backend.Model.Teach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RepositoryRestResource
public interface TeachRepository extends JpaRepository<Teach,Long> {
}
