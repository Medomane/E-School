package backend.Controller;

import backend.Model.Teach;
import backend.Repository.ModuleElementRepository;
import backend.Repository.TeachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class TeachController {
    final TeachRepository teachRepository;
    final ModuleElementRepository moduleElementRepository;

    public TeachController(TeachRepository teachRepository, ModuleElementRepository moduleElementRepository) {
        this.teachRepository = teachRepository;
        this.moduleElementRepository = moduleElementRepository;
    }
    @PostMapping("/teach")
    public Teach save(@RequestBody Teach teach){
        return teachRepository.save(teach);
    }
    @GetMapping("/getTeaches/{id}")
    public List<Teach> get(@PathVariable Long id){
        return teachRepository.getAllByModuleElement(moduleElementRepository.findById(id).get());
    }
}
