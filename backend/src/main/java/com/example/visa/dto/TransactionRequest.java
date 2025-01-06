package com.example.visa.dto;

import jakarta.validation.constraints.*;
import lombok.Data;
import java.math.BigDecimal;

@Data
public class TransactionRequest {
    @NotBlank
    @Pattern(regexp = "^[0-9]{16}$")
    private String cardNumber;

    @NotBlank
    private String cardHolderName;

    @NotBlank
    @Pattern(regexp = "^(0[1-9]|1[0-2])\\/([0-9]{2})$")
    private String expiryDate;

    @NotBlank
    @Pattern(regexp = "^[0-9]{3}$")
    private String cvv;

    @NotNull
    @Positive
    private BigDecimal amount;
}