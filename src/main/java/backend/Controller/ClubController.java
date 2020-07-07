package backend.Controller;

import backend.Model.Club;
import backend.Repository.ClubRepository;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@RestController
@CrossOrigin("*")
public class ClubController {
    final ClubRepository clubRepository;
    public ClubController(ClubRepository clubRepository) {
        this.clubRepository = clubRepository;
    }
    @GetMapping("/getClubs")
    public List<Club> get(){
        return clubRepository.findAll();
    }
    @GetMapping(value = "/icon/{id}",produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] image(@PathVariable Long id) throws Exception {
        return Files.readAllBytes(Paths.get(new File(System.getProperty("user.home")+"/e-school/images/clubs/"+clubRepository.getOne(id).getIcon()).toURI()));
    }
}
