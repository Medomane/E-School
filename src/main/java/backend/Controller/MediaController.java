package backend.Controller;

import backend.Model.Object;
import backend.Repository.ObjectRepository;
import backend.func;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@CrossOrigin("*")
public class MediaController {

    final ObjectRepository objectRepository;
    public MediaController(ObjectRepository objectRepository) {
        this.objectRepository = objectRepository;
    }
    @PostMapping("/image/{type}")
    public boolean uploadImage(@RequestParam("imageFile") MultipartFile file,@PathVariable String type) {
        try {
            if (file.isEmpty()) return false;
            func.checkFiles(type);
            Path path = Paths.get(func.imagesPath+"/"+type+"/" + file.getOriginalFilename());
            byte[] bytes = file.getBytes();
            Files.write(path, bytes);
        }
        catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }
    @GetMapping(value = "/image/{id}",produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] image(@PathVariable Long id) throws Exception {
        Object obj = objectRepository.findById(id).get();
        System.out.println(obj.getClass().getSimpleName());
        return Files.readAllBytes(Paths.get(new File(func.imagesPath+"/"+obj.getClass().getSimpleName()+"/"+obj.getIcon()).toURI()));
    }
}
