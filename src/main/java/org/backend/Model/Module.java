package org.backend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@DiscriminatorValue("module")
public class Module extends Object {
    @OneToMany(mappedBy="module")
    private List<Subject> subjects;

    @ManyToOne
    @JoinColumn(name = "branchId")
    private Branch branch ;

    @ManyToOne
    @JoinColumn(name = "sessionId")
    private Session session ;
}
