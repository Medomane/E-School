package backend.Repository;

import backend.Model.University;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RepositoryRestResource
public interface UniversityRepository extends ObjectBaseRepository<University> {
}
