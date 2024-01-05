package com.bc145seeder.user.service;

import com.bc145seeder.user.dto.UserDto;
import com.bc145seeder.user.entity.User;
import com.bc145seeder.user.exception.UserNotFoundException;
import com.bc145seeder.user.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    private ModelMapper modelMapper;
    public UserServiceImpl() {
        modelMapper = new ModelMapper();
    }


    @Override
    public List<UserDto> getAllUsers() {
        try {
            List<User> users = userRepository.findAll();
            return users.stream().map(user -> modelMapper.map(user, UserDto.class)).collect(Collectors.toList());
        } catch (Exception e){
            throw new UserNotFoundException("failed while fetching the users");
        }
    }

    @Override
    public UserDto getByUserId(int id) {
        try {
            Optional<User> user = userRepository.findById(id);
            return user.map(existinguser -> modelMapper.map(existinguser, UserDto.class)).orElse(null);
        }catch (Exception e){
            throw new UserNotFoundException("failed while fetching the user by id");
        }
    }

    @Override
    public UserDto getByEmail(String email) {
        try {
            User users = userRepository.findByEmail(email);
            return users != null ? modelMapper.map(users, UserDto.class) : null;
        }catch (Exception e){
            throw new UserNotFoundException("Failed while fetching the user by email");
        }
    }

    @Override
    public UserDto saveUser(UserDto userDto) {
        try {
            User user = modelMapper.map(userDto, User.class);
            User savedUser = userRepository.save(user);

            return modelMapper.map(savedUser, UserDto.class);
        }catch (Exception e){
            throw new UserNotFoundException("failed while saving the user");
        }
    }

    @Override
    public UserDto patchUser(int id, UserDto userDto) {
        try {
            Optional<User> user = userRepository.findById(id);
            if (user.isPresent()) {
                User existingUser = user.get();
                if (userDto.getPassword() != null) {
                    existingUser.setPassword(userDto.getPassword());
                }
                User updateUser = userRepository.save(existingUser);
                return modelMapper.map(updateUser, UserDto.class);
            }
            return null;
        }catch (Exception e){
            throw new UserNotFoundException("failed while patching the user");
        }
    }

    @Override
    public void deleteById(int id) {
        try {
            userRepository.deleteById(id);
        }catch (Exception e){
            throw new UserNotFoundException("unable to delete");
        }
    }
}
