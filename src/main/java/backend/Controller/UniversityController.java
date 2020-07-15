package backend.Controller;

import backend.Model.Object;
import backend.Repository.ObjectRepository;
import backend.Repository.UniversityRepository;
import backend.func;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
@CrossOrigin("*")
public class UniversityController {
    final UniversityRepository universityRepository;
    final ObjectRepository objectRepository;

    public UniversityController(UniversityRepository universityRepository,ObjectRepository objectRepository) {
        this.universityRepository = universityRepository;
        this.objectRepository = objectRepository;
    }
    @GetMapping(value = "/obj/{id}")
    public Object get(@PathVariable Long id) throws Exception {
        return  objectRepository.findById(id).get();
    }
}
