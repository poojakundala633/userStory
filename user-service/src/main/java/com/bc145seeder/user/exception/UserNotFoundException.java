package com.bc145seeder.user.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String message) { super (message); }
}
