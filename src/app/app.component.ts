import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from "./header/header.component";
import { MainTableComponent } from "./main-table/main-table.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MatListModule, HeaderComponent, MainTableComponent, FooterComponent]
})
export class AppComponent {
  title = 'proyectoPFC';
}
