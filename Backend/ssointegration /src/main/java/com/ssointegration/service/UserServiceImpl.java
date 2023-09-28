package com.ssointegration.service;

import com.ssointegration.dto.UserDto;
import com.ssointegration.entity.User;
import com.ssointegration.exception.NotFoundException;
import com.ssointegration.exception.PostException;
import com.ssointegration.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    private ModelMapper modelMapper;

    public UserServiceImpl(){modelMapper = new ModelMapper();}
    @Override
    public List<UserDto> getAllUsers() {
        try {
            List<User> users = userRepository.findAll();
            return users.stream().map(user -> modelMapper.map(user,UserDto.class)).collect(Collectors.toList());
        }catch (Exception e){
            throw new NotFoundException("Failed to retrieve the data");
        }

    }

    @Override
    public UserDto saveUser(UserDto userDto) {
        try{
            User user = modelMapper.map(userDto,User.class);
            User saveUser = userRepository.save(user);
            return modelMapper.map(saveUser,UserDto.class);
        }catch (Exception e){
            throw new PostException("Failed to create personal details");
        }

    }
}
