package backend.Controller;

import backend.Model.Semester;
import backend.Repository.SemesterRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class SemesterController {
    final SemesterRepository semesterRepository;

    public SemesterController(SemesterRepository semesterRepository) {
        this.semesterRepository = semesterRepository;
    }
    @PostMapping("/semester")
    public Semester save(@RequestBody Semester semester){
        return semesterRepository.save(semester);
    }
}
