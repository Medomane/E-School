package backend.Controller;

import backend.Model.ModuleElement;
import backend.Repository.ModuleElementRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class ModuleElementController {
    final ModuleElementRepository moduleElementRepository;

    public ModuleElementController(ModuleElementRepository moduleElementRepository) {
        this.moduleElementRepository = moduleElementRepository;
    }
    @PostMapping("/moduleElement")
    public ModuleElement save(@RequestBody ModuleElement moduleElement){
        ModuleElement me = moduleElementRepository.findById(moduleElement.getId()).get();
        me.setDuration(moduleElement.getDuration());
        me.setPercent(moduleElement.getPercent());
        return moduleElementRepository.save(me);
    }
}
