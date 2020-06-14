package org.backend.Model;

import com.sun.istack.NotNull;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@DiscriminatorValue("professor")
public class Professor extends Person{
    @NotNull
    private String status;

    @OneToMany(mappedBy="professor")
    private List<Teach> teaches;
}
