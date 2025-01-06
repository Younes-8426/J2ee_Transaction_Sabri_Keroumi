package com.example.visa.dto;

import com.example.visa.model.TransactionStatus;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class TransactionResponse {
    private Long id;
    private String cardNumber;
    private String cardHolderName;
    private BigDecimal amount;
    private TransactionStatus status;
    private LocalDateTime timestamp;
}