package com.bc145seeder.user.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import static com.bc145seeder.user.utils.Constants.USER_NAME_ERROR;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class UserDto {

    private int id;
    @NotBlank(message = USER_NAME_ERROR)
    private String name;
    private String email;
    private String password;
}
