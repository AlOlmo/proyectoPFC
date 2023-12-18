import {Component, Input, OnInit} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {CompanyCardComponent} from "../company-card/company-card.component";
import {ValuesByCompany} from "../../../model/entities/valuesbycompany";
import {MatListModule} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTabsModule} from "@angular/material/tabs";
import {BackendService} from "../../../model/services/backend.service";

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [
    MatInputModule,
    CompanyCardComponent,
    MatListModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, CompanyCardComponent, HttpClientModule, MatExpansionModule, MatTabsModule
  ],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css',
  providers: [BackendService]
})
export class CompanyListComponent implements OnInit {

  @Input() displaySymbols!: string[]

  initialData!: ValuesByCompany[]
  filteredData!: ValuesByCompany[]

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.backendService.getValuesByCompany().subscribe(companyWithValues => {
      if (this.displaySymbols != undefined) {
        this.initialData = companyWithValues.filter(company => this.displaySymbols.includes(company.company.symbol))
      } else {
        this.initialData = companyWithValues
      }
      this.filteredData = this.initialData
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.filteredData = this.initialData.filter(companyWithValues =>
      companyWithValues.company.name.toLocaleLowerCase().includes(filterValue) ||
      companyWithValues.company.symbol.toLocaleLowerCase().includes(filterValue)
    )
  }

}
