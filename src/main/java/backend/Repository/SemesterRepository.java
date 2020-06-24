package backend.Repository;

import backend.Model.Semester;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RepositoryRestResource
public interface SemesterRepository extends ObjectBaseRepository<Semester> {
}
