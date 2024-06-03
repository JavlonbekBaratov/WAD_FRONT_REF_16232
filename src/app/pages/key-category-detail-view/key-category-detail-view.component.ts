import { Component, inject } from '@angular/core';
import { KeyCategoriesService } from '../../services/key-categories.service';
import { KeyCategoriesType } from '../../Interfaces/KeyCategoriesType';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-keyCategories-detail-view',
  standalone: true,
  imports: [],
  templateUrl: './key-category-detail-view.component.html',
  styleUrl: './key-category-detail-view.component.scss'
})
export class KeyCategoryDetailViewComponent {
  keyCategoryDetailService = inject(KeyCategoriesService)
  keycategoryDetail: KeyCategoriesType = {
  id: 0,
  keyCategoryName: '',
  keyDescription: '',
  securityLevel: "",
}
  route = inject(ActivatedRoute)
  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.keyCategoryDetailService.getKeyCategories(id).subscribe((item: KeyCategoriesType) => {
      this.keycategoryDetail = item;
    });
  }
}
