package backend.Controller;

import backend.Model.Branch;
import backend.Repository.BranchRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class BranchController {
    final BranchRepository branchRepository;

    public BranchController(BranchRepository branchRepository) {
        this.branchRepository = branchRepository;
    }
    @PostMapping("/branch")
    public Branch save(@RequestBody Branch branch){
        return branchRepository.save(branch);
    }
}
