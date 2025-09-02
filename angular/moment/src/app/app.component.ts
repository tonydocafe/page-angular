import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

import { MessagesComponent } from './components/messages/messages.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule, FooterComponent, HeaderComponent,MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'moment';
}
