package backend.Repository;

import backend.Model.Establishment;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RepositoryRestResource
public interface EstablishmentRepository extends ObjectBaseRepository<Establishment> {
}
