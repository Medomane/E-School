package backend.Controller;

import backend.Model.Teach;
import backend.Repository.TeachRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class TeachController {
    final TeachRepository teachRepository;

    public TeachController(TeachRepository teachRepository) {
        this.teachRepository = teachRepository;
    }
    @PostMapping("/teach")
    public Teach save(@RequestBody Teach teach){
        return teachRepository.save(teach);
    }
}
