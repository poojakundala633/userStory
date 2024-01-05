package com.bc145seeder.user.service;

import com.bc145seeder.user.dto.UserDto;
import com.bc145seeder.user.entity.User;

import java.util.List;

public interface UserService{
    List<UserDto> getAllUsers();

    UserDto getByUserId(int id);
    UserDto getByEmail(String email);
    UserDto saveUser(UserDto userDto);
    UserDto patchUser(int id, UserDto userDto);
    void deleteById(int id);


}
