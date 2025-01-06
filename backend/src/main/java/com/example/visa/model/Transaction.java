package com.example.visa.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

    @Enumerated(EnumType.STRING)
    private TransactionStatus status = TransactionStatus.PENDING;

    private LocalDateTime timestamp = LocalDateTime.now();
}