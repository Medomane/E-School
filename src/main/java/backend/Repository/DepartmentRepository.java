package backend.Repository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RepositoryRestResource
public interface DepartmentRepository extends ObjectBaseRepository<backend.Model.Department> {
}
