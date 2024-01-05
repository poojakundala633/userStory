package com.bc145seeder.user.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorResponseDto {
    private long timestamp;
    private int status;
    private String title;
    private String message;
}
