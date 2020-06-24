package backend.Model;

import org.springframework.data.rest.core.config.Projection;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
@Projection(name = "clubProjection",types = {Club.class})
public interface ClubProjection {
    public Long getId();
    public String getName();
    public String getInformation();
    public String getIcon();
    public String getLink();
    public List<Adhere> getAdheres();
}
