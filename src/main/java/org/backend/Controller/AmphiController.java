package org.backend.Controller;

import org.backend.Repository.AmphiRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AmphiController {
    final AmphiRepository amphiRepository;
    public AmphiController(AmphiRepository amphiRepository) {
        this.amphiRepository = amphiRepository;
    }
}