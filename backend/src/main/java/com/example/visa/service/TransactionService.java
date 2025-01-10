package com.example.visa.service;

import com.example.visa.dto.TransactionRequest;
import com.example.visa.dto.TransactionResponse;
import com.example.visa.model.Transaction;
import com.example.visa.model.TransactionStatus;
import com.example.visa.repository.TransactionRepository;
import com.example.visa.util.TransactionMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TransactionService {
    private final TransactionRepository repository;
    @Qualifier("transactionMapper")
    private final TransactionMapper mapper;
    private final ValidationService validationService;

    @Transactional
    public TransactionResponse processTransaction(TransactionRequest request) {
        validationService.validateTransaction(request);
        
        Transaction transaction = mapper.toEntity(request);
        
        // Simulate processing
        boolean isSuccessful = processPayment(transaction);
        transaction.setStatus(isSuccessful ? TransactionStatus.COMPLETED : TransactionStatus.FAILED);
        
        Transaction savedTransaction = repository.save(transaction);
        return mapper.toResponse(savedTransaction);
    }

    public List<TransactionResponse> getAllTransactions() {
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    private boolean processPayment(Transaction transaction) {
        // paiement gateway
        return Math.random() > 0.1; // pourcentage aleatoire a 90% de succes
    }
}