import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="d-flex flex-column min-vh-250" style="display: flex; flex-direction: column;">
      <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: darkblue;">
        <a class="navbar-brand text-white" href="#">Visa Transaction</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link text-white" href="/">Home</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="/about">About</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <router-outlet></router-outlet>
      </main>

      <footer class="bg-secondary text-white py-4" style="background-color: #1b1d22;">
        <div class="container" style="flex-direction: row; display: flex">
          <p>&copy; 2025 Visa Transaction App. All Rights Reserved.</p>
          <p>
            <a href="/privacy-policy" title="Privacy Policy" class="text-white-50" style="margin: 4px;">Privacy Policy</a> |
            <a href="/terms-of-service" title="Terms of Service" class="text-white-50" style="margin: 4px;">Terms of Service</a>
          </p>
          <div class="footer-icons">
            <a href="https://facebook.com" target="_blank" title="Facebook" style="margin: 4px;"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" title="Twitter" style="margin: 4px;"><i class="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" title="Instagram" style="margin: 4px;"><i class="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" title="LinkedIn" style="margin: 4px;"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class App {}