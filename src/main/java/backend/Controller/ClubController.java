package backend.Controller;

import backend.Model.Club;
import backend.Repository.ClubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.multipart.MultipartFile;

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
    @PostMapping("/image/upload")
    public boolean uploadImage(@RequestParam("imageFile") MultipartFile file) {
        try {
            if (file.isEmpty()) return false;
            byte[] bytes = file.getBytes();
            Path path = Paths.get(System.getProperty("user.home")+"/e-school/images/clubs/" + file.getOriginalFilename());
            Files.write(path, bytes);
        }
        catch (Exception e) {
            return false;
        }
        return true;
    }
}
