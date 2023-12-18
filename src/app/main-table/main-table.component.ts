import {Component, OnInit} from '@angular/core';
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
import {MatTabsModule} from "@angular/material/tabs";
import {CompanyListComponent} from "./company-list/company-list.component";
import {ListService} from "../../model/services/list.service";
import {UserList} from "../../model/entities/userlist";




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
  imports: [MatListModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, CompanyCardComponent, HttpClientModule, MatExpansionModule, MatTabsModule, CompanyListComponent],
  styleUrl: './main-table.component.css',
  providers: [ListService]
})
export class MainTableComponent implements OnInit {

  initialData!: ValuesByCompany[];
  allSymbols!: string[];
  userLists!: UserList[];

  constructor(private listService: ListService) {
    this.ngOnInit()
  }

  ngOnInit() {
    this.userLists = this.listService.getUserLists("user-token")
  }

}



