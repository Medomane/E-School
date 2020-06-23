package backend.Repository;

import backend.Model.Professor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RepositoryRestResource
public interface ProfessorRepository extends PersonBaseRepository<Professor> {

}
