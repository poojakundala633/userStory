package com.bc145seeder.user.repository;

import com.bc145seeder.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}
