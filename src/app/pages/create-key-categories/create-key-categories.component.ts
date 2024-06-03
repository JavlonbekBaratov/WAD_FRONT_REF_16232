import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { KeyCategoriesService } from '../../services/key-categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { KeyCategoriesType } from '../../Interfaces/KeyCategoriesType';

@Component({
  selector: 'app-create-keyCategories',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-key-categories.component.html',
  styleUrl: './create-key-categories.component.scss'
})
export class CreateKeyCategoriesComponent {
  @Input()
  keyCategoriesDetail!: KeyCategoriesType;

  id: number = 0

  router = inject(Router)
  keyCategoriesService = inject(KeyCategoriesService)
  route = inject(ActivatedRoute)

  keyCategoriesForm = new FormGroup({
    keyCategoryName: new FormControl(''),
    keyDescription: new FormControl(''),
    securityLevel: new FormControl(''),
  })

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      if(params.get('id')) {
        const id: number = Number(params.get('id'))
        this.id = id
        this.keyCategoriesService.getKeyCategories(id).subscribe((item: any) => {
          this.keyCategoriesForm = new FormGroup({
            keyCategoryName: new FormControl(item.keyCategoryName),
            keyDescription: new FormControl(item.keyDescription),
            securityLevel: new FormControl(item.securityLevel)
          });
        });
      }
    });

  }

  onSubmit() {

    if (this.id) {
      this.keyCategoriesService.updateKeyCategories(this.id, {id: this.id, ...this.keyCategoriesForm.value}).subscribe(_ => {
        this.router.navigateByUrl("key-categories");
      });
    } else {
      this.keyCategoriesService.createKeyCategories (this.keyCategoriesForm.value).subscribe(_ => {
        this.router.navigateByUrl("key-categories");
      });
    }
  }
}
