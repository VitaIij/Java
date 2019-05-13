package com.kpi.voting.dao;

import java.util.Optional;

import com.kpi.voting.dao.entity.Role;
import com.kpi.voting.dao.entity.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}
