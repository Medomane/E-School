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
@DiscriminatorValue("department")
public class Department extends Object{
    @OneToMany(mappedBy="department")
    private List<Branch> branches;

    @ManyToOne
    @JoinColumn(name = "establishmentId")
    private Establishment establishment ;
}
