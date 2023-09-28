package com.ssointegration.service;

import com.ssointegration.dto.UserDto;
import java.util.List;
public interface UserService {
    List<UserDto> getAllUsers();
    UserDto saveUser(UserDto userDto);
}
