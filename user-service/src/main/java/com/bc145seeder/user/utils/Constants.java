package com.bc145seeder.user.utils;

import org.springframework.validation.BindingResult;

import java.util.List;

public class Constants {
    private Constants() {}
    public static final String USER_NAME_ERROR = "SHOULD NOT BE BLANK";
    public static List<String> getBindingResultErrors(
            BindingResult bindingResult
    ) {
        return bindingResult
                .getFieldErrors()
                .stream()
                .map(error -> error.getField() + ":" + error.getDefaultMessage())
                .toList();
    }
}
