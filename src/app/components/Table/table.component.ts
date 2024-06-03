import { Component, Input, OnInit, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { TableColumnTypes } from '../../Interfaces/TableColumnTypes';
import { KeyType } from '../../Interfaces/Keys';
import { KeyCategoriesType } from '../../Interfaces/KeyCategoriesType';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { KeyCategoriesService } from '../../services/key-categories.service';
import { KeysService } from '../../services/Keys.service';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  imports: [MatTableModule, MatButtonModule, MatDividerModule, MatIconModule],
})
export class TableComponent {
  router = inject(Router)
  location = inject(Location)
  keyCategoriesService = inject(KeyCategoriesService)
  keysService = inject(KeysService)

  @Input()
  dataWarehouse: (KeyType | KeyCategoriesType)[] = [];

  @Input()
  displayedColumns: TableColumnTypes[] = [];

  displayedColumnsStr: string[] = [];

  ngOnChanges() {
    this.displayedColumnsStr = this.displayedColumns.map((item) => item.key);
    this.displayedColumnsStr.unshift('No');
    this.displayedColumnsStr.push('Actions');
  }

  EditClicked(id: number){
    const route = this.location.path().slice(1)
    this.router.navigateByUrl(`create-${route}?id=${id}`)
  }

  DetailsClicked(id: number){
    this.router.navigateByUrl(this.location.path() + '/' + id)
  }

  DeleteClicked(id: number){

    if(this.location.path() === "/key-categories"){
      this.keyCategoriesService.deleteKeyCategories(id).subscribe(_ => {
        this.dataWarehouse = this.dataWarehouse.filter((t) => t.id !== id)

      })
    }else{
      this.keysService.deleteKey(id).subscribe(_ => {
        this.dataWarehouse = this.dataWarehouse.filter((t) => t.id !== id)
        
      })
    }   
  }


}
