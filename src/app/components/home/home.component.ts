import { Component } from '@angular/core';
//import { CarouselComponent } from '../carousel/carousel.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    template: `
        <div class="bg-secondary-subtle text-black-50 p-5" style="justify-content: center; align-items: center; text-align: center;">
            <h1 class="text-center">Bienvenue a l'application de transfert</h1>
            <p class="text-center">Pour des transferts de paiement securises.</p>
        </div>
  `
})
export class HomeComponent {}