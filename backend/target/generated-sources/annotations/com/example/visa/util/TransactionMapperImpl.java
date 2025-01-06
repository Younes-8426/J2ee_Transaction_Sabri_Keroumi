package com.example.visa.util;

import com.example.visa.dto.TransactionRequest;
import com.example.visa.dto.TransactionResponse;
import com.example.visa.model.Transaction;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-01-06T10:56:07-0500",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 23.0.1 (Oracle Corporation)"
)
@Component
public class TransactionMapperImpl implements TransactionMapper {

    @Override
    public Transaction toEntity(TransactionRequest request) {
        if ( request == null ) {
            return null;
        }

        Transaction transaction = new Transaction();

        transaction.setCardNumber( request.getCardNumber() );
        transaction.setCardHolderName( request.getCardHolderName() );
        transaction.setExpiryDate( request.getExpiryDate() );
        transaction.setCvv( request.getCvv() );
        transaction.setAmount( request.getAmount() );

        return transaction;
    }

    @Override
    public TransactionResponse toResponse(Transaction transaction) {
        if ( transaction == null ) {
            return null;
        }

        TransactionResponse transactionResponse = new TransactionResponse();

        transactionResponse.setCardNumber( maskCardNumber( transaction.getCardNumber() ) );
        transactionResponse.setId( transaction.getId() );
        transactionResponse.setCardHolderName( transaction.getCardHolderName() );
        transactionResponse.setAmount( transaction.getAmount() );
        transactionResponse.setStatus( transaction.getStatus() );
        transactionResponse.setTimestamp( transaction.getTimestamp() );

        return transactionResponse;
    }
}
