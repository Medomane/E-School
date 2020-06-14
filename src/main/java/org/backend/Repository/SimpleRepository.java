package org.backend.Repository;

import org.backend.Model.Simple;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin("*")
public interface SimpleRepository extends JpaRepository<Simple,Long> {
}
