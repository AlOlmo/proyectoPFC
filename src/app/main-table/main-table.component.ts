import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { BackendService } from '../../model/services/backend.service';
import { ValuesByCompany } from '../../model/entities/valuesbycompany';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { CompanyCardComponent } from './company-card/company-card.component';
import {MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';

 


@Component({
  selector: 'app-main-table',
  standalone: true,
  templateUrl: './main-table.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  imports: [MatListModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, CompanyCardComponent, HttpClientModule, MatExpansionModule],
  styleUrl: './main-table.component.css',
  providers: [BackendService]
})
export class MainTableComponent {
  initialData: ValuesByCompany[] = [];
  filteredData: ValuesByCompany[] = [];
  //valuesData: Values[] = [];
  columnsToDisplay = ['company', 'symbol', 'price'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: null = null;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.backendService.getValuesByCompany().subscribe(valuesByCompany => {
      this.initialData = valuesByCompany
      this.filteredData = this.initialData
    })
    /*
    this.http.get<Values[]>(apiUrlData).subscribe(data2 => {
      this.valuesData = data2.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return dateB.getTime() - dateA.getTime();
      });
      console.log(this.valuesData);
    });
*/
  }
  
  /*Filtro del buscador*/ 
  applyFilter(event: Event) {
      console.log(this.filteredData)
      const filterValue = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
      this.filteredData = this.initialData.filter(companyWithValues => 
        companyWithValues.company.name.toLocaleLowerCase().includes(filterValue) || 
        companyWithValues.company.symbol.toLocaleLowerCase().includes(filterValue)
      )
    }

}



