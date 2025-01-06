package com.example.visa.service;

import com.example.visa.dto.TransactionRequest;
import com.example.visa.exception.ValidationException;
import org.springframework.stereotype.Service;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;

@Service
public class ValidationService {
    
    public void validateTransaction(TransactionRequest request) {
        validateExpiryDate(request.getExpiryDate());
        validateAmount(request.getAmount().toString());
    }

    private void validateExpiryDate(String expiryDate) {
        try {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/yy");
            YearMonth expiry = YearMonth.parse(expiryDate, formatter);
            YearMonth now = YearMonth.now();

            if (expiry.isBefore(now)) {
                throw new ValidationException("Card has expired");
            }
        } catch (Exception e) {
            throw new ValidationException("Invalid expiry date format");
        }
    }

    private void validateAmount(String amount) {
        try {
            double value = Double.parseDouble(amount);
            if (value <= 0) {
                throw new ValidationException("Amount must be greater than zero");
            }
        } catch (NumberFormatException e) {
            throw new ValidationException("Invalid amount format");
        }
    }
}