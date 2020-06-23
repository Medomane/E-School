package backend.Repository;

import backend.Model.Club;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RepositoryRestResource
public interface ClubRepository extends ObjectBaseRepository<Club> {
}
