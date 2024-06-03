import { Component } from '@angular/core';
import { KeyType } from '../../Interfaces/Keys';
import { TableComponent } from '../../components/Table/table.component';
import { KeysService } from '../../services/Keys.service';
import { TableColumnTypes } from '../../Interfaces/TableColumnTypes';

@Component({
  selector: 'app-keys',
  standalone: true,
  templateUrl: './keys.component.html',
  styleUrl: './keys.component.scss',
  imports: [TableComponent],
})
export class KeyComponent {
  keysItems: KeyType[] = [];

  constructor(private keysService: KeysService) {}

  ngOnInit(): void {
    this.keysService.getItems().subscribe((item) => {
      this.keysItems = item;
    });
  }

  displayedColumns: TableColumnTypes[] = [
    {
      label: 'Name',
      key: 'keyName',
    },
    {
      label: 'Instruction',
      key: 'keyInstruction',
    },
    {
      label: 'Creater',
      key: 'manufacturer',
    },
    {
      label: 'Price',
      key: 'price',
    },
  ];
}
