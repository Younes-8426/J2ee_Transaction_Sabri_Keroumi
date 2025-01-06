package com.example.visa.util;

import com.example.visa.dto.TransactionRequest;
import com.example.visa.dto.TransactionResponse;
import com.example.visa.model.Transaction;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface TransactionMapper {
    
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "timestamp", ignore = true)
    Transaction toEntity(TransactionRequest request);
    
    @Mapping(source = "cardNumber", target = "cardNumber", qualifiedByName = "maskCardNumber")
    TransactionResponse toResponse(Transaction transaction);
    
    @Named("maskCardNumber")
    default String maskCardNumber(String cardNumber) {
        return "**** **** **** " + cardNumber.substring(12);
    }
}