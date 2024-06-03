import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { KeyCategoriesService } from '../../services/key-categories.service';
import { KeyCategoriesType } from '../../Interfaces/KeyCategoriesType';
import { KeysService } from '../../services/Keys.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-key',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-key.component.html',
  styleUrl: './create-key.component.scss'
})
export class CreateNewKeyComponent {
  router = inject(Router)
  keyService = inject(KeyCategoriesService)
  route = inject(ActivatedRoute)
  keysService = inject(KeysService)
  // participants: KeysService[]=[]
  keys: KeyCategoriesType[]=[]
  id: number = 0


 

  keyForm = new FormGroup({
    keyName: new FormControl(''),
    keyInstruction: new FormControl(''),
    manufacturer: new FormControl(''),
    price: new FormControl(''), 
    keyCategoryID: new FormControl('')
  })

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      if(params.get('id')) {
        const id: number = Number(params.get('id'))
        this.id = id
        
        this.keysService.getKey(id).subscribe((item: any) => {          
          this.keyForm = new FormGroup({
            keyName: new FormControl(item.keyName),
            keyInstruction: new FormControl(item.keyInstruction),
            manufacturer: new FormControl(item.manufacturer),
            price: new FormControl(item.price),
            keyCategoryID: new FormControl(item.keyCategoryID)
          });
        });
      }
      this.keyService.getItems().subscribe((result) => {
        this.keys = result
      });
    });

  }

  onSubmit() {
    if (this.id){
      this.keysService.updateKey(this.id, {id: this.id, ...this.keyForm.value}).subscribe(_ => {
        this.router.navigateByUrl("keys");
      });
    } else {
      this.keysService.createNewKey(this.keyForm.value).subscribe(_=>{
        this.router.navigateByUrl("keys")
      })
    }
  
  }
}
