import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importar el componente de rutas
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,     // Necesario para <router-outlet>
    NavbarComponent,  // Asegúrate de importar tus componentes de UI
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'portfolio-angular';
}
