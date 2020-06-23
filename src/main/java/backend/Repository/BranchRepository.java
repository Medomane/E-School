package backend.Repository;

import backend.Model.Branch;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RepositoryRestResource
public interface BranchRepository extends ObjectBaseRepository<Branch> {
}
