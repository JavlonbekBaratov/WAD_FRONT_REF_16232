import { Component } from '@angular/core';
import { KeyCategoriesService } from '../../services/key-categories.service';
import { KeyCategoriesType } from '../../Interfaces/KeyCategoriesType';
import { TableColumnTypes } from '../../Interfaces/TableColumnTypes';
import { TableComponent } from "../../components/Table/table.component";


@Component({
    selector: 'app-keyCategories',
    standalone: true,
    templateUrl: './key-categories.component.html',
    styleUrl: './key-categories.component.scss',
    imports: [TableComponent]
})
export class KeyCategoriesComponent {
  keycategoriesItems: KeyCategoriesType[] = [];

  constructor(private keycategoriesService: KeyCategoriesService) {}

  ngOnInit(): void {
    this.keycategoriesService.getItems().subscribe((item) => {
      this.keycategoriesItems = item;
    });
  }

  displayedColumns: TableColumnTypes[] = [
    {
      label: 'Name of Category',
      key: 'keyCategoryName',
    },
    {
      label: 'Description',
      key: 'keyDescription',
    },
    {
      label: 'Level',
      key: 'securityLevel',
    },
  ];
}
