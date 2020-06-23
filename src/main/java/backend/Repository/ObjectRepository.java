package backend.Repository;

import backend.Model.Object;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RepositoryRestResource
public interface ObjectRepository extends ObjectBaseRepository<Object> {
}
