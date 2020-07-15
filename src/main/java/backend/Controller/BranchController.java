package backend.Controller;

import backend.Model.Branch;
import backend.Repository.BranchRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @GetMapping("/getBranches")
    public List<Branch> get(){
        return branchRepository.findAll();
    }
}
