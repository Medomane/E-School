package backend.Repository;

import backend.Model.ModuleElement;
import backend.Model.Teach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
@RepositoryRestResource
public interface TeachRepository extends JpaRepository<Teach,Long> {
    public List<Teach> getAllByModuleElement(ModuleElement moduleElement);
}
