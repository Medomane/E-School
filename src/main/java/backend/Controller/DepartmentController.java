package backend.Controller;

import backend.Model.Department;
import backend.Repository.DepartmentRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class DepartmentController {
    final DepartmentRepository departmentRepository;

    public DepartmentController(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }
    @PostMapping("/department")
    public Department save(@RequestBody Department department){
        return departmentRepository.save(department);
    }
}
