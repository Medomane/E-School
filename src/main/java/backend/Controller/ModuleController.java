package backend.Controller;

import backend.Model.Module;
import backend.Repository.ModuleRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class ModuleController {
    final ModuleRepository moduleRepository;

    public ModuleController(ModuleRepository moduleRepository) {
        this.moduleRepository = moduleRepository;
    }
    @PostMapping("/module")
    public Module save(@RequestBody Module module){
        return moduleRepository.save(module);
    }
}
