package backend.Controller;

import backend.Model.Adhere;
import backend.Repository.AdhereRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class AdhereController {

    final AdhereRepository adhereRepository;

    public AdhereController(AdhereRepository adhereRepository) {
        this.adhereRepository = adhereRepository;
    }

    @PostMapping("/adhere")
    public Adhere save(@RequestBody Adhere adhere){
        return adhereRepository.save(adhere);
    }

}
