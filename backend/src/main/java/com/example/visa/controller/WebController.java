package com.example.visa.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class WebController {
    @RequestMapping("/")
    public RedirectView redirectToAngular() {
        return new RedirectView("http://localhost:4200");
    }
}