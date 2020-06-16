package backend.Repository;

import backend.Model.Establishment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin("*")
public interface EstablishmentRepository extends JpaRepository<Establishment,Long> {
}