package backend.Model;

import org.springframework.data.rest.core.config.Projection;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
@Projection(name = "studentProjection",types = {Student.class})
public interface StudentProjection {
    public Long getId();
    public String getFirstName();
    public String getLastName();
    public String getCin();
    public String getApogee();
    public Person.Gender getGender();
    public String getEmail();
    public String getPhone();
    public String getInformation();
    public String getPassword();
    public Person.Role getRole();
    public String getCne();
    public Branch getBranch();
    public List<Adhere> getAdheres();
}
