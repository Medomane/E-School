package org.backend.Model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("amphi")
public class Amphi extends Classroom {

}