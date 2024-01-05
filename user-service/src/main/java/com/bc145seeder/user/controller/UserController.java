package com.bc145seeder.user.controller;

import com.bc145seeder.user.dto.UserDto;
import com.bc145seeder.user.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.bc145seeder.user.utils.Constants.getBindingResultErrors;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers(){
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable int id){
        return new ResponseEntity<>(userService.getByUserId(id),HttpStatus.OK);
    }

    @GetMapping("/email")
    public ResponseEntity<UserDto> getUserByEmail(@RequestParam String email){
        return new ResponseEntity<>(userService.getByEmail(email),HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Object> saveUser(@Valid @RequestBody UserDto userDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(getBindingResultErrors(bindingResult));
        }

        UserDto savedUser = userService.saveUser(userDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }


    @PatchMapping("/{id}")
    public ResponseEntity<UserDto> patchUser(@PathVariable int id, @RequestBody UserDto userDto){
        return new ResponseEntity<>(userService.patchUser(id,userDto),HttpStatus.CREATED);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable int id){
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
