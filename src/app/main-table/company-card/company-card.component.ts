import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ValuesByCompany } from '../../../model/entities/valuesbycompany';
import {ViewChild} from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import { StockValue } from '../../../model/entities/values'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,CommonModule],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.css'
})
export class CompanyCardComponent {

  panelOpenState = false;

  @Input() company: ValuesByCompany = { 
    company: {
      name: "BBVA",
      symbol: "BBVA"
    }, 
    values: [
        {
          symbol: "BBVA",
          date: "2023-12-12",
          price: 11.11,
          variation: 2.2,
          maxValue: 33.33,
          minValue: 10.00,
          openValue: 15.55,
      }
    ]
  }

  lastValue(): StockValue {
    return this.company.values.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    })[0];
  }

}
