package backend.Controller;

import backend.Model.Establishment;
import backend.Repository.EstablishmentRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class EstablishmentController {
    final EstablishmentRepository establishmentRepository;

    public EstablishmentController(EstablishmentRepository establishmentRepository) {
        this.establishmentRepository = establishmentRepository;
    }
    @PostMapping("/establishment")
    public Establishment save(@RequestBody Establishment establishment){
        return establishmentRepository.save(establishment);
    }
}
