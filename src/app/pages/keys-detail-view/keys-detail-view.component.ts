import { Component, inject } from '@angular/core';
import { KeyCategoriesService } from '../../services/key-categories.service';
import { KeyCategoriesType } from '../../Interfaces/KeyCategoriesType';
import { ActivatedRoute } from '@angular/router';
import { KeyType } from '../../Interfaces/Keys';
import { KeysService } from '../../services/Keys.service';

@Component({
  selector: 'app-keys-detail-view',
  standalone: true,
  imports: [],
  templateUrl: './keys-detail-view.component.html',
  styleUrl: './keys-detail-view.component.scss'
})
export class KeysDetailViewComponent {
  keysService = inject(KeysService)
  keyDetail: KeyType = {
  id: 0,
  keyName: '',
  keyInstruction: '',
  manufacturer: "",
  price: 0,
  keyCategory: {
      id: 0,
      keyCategoryName: '',
      keyDescription: '',
      securityLevel: ''
    }
  }

  route = inject(ActivatedRoute)
  ngOnInit() {
    const id = this.route.snapshot.params['id']; 
    
    
    this.keysService.getKey(id).subscribe((item: KeyType) => {
      console.log("item", item);
      this.keyDetail = item;
    });
  }
}
