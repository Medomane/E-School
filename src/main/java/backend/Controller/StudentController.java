package backend.Controller;

import backend.Model.Student;
import backend.Repository.StudentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class StudentController {
    final StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }
    @PostMapping("/student")
    public Student test(@RequestBody Student student){
        return studentRepository.save(student);
    }
    @GetMapping("/getStudents")
    public List<Student> get(){
        return studentRepository.findAll();
    }
}
