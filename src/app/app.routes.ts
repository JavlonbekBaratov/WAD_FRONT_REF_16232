import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { KeyComponent } from './pages/keys/keys.component';
import { KeyCategoriesComponent } from './pages/key-categories/key-categories.component';
import { CreateKeyCategoriesComponent } from './pages/create-key-categories/create-key-categories.component';
import { CreateNewKeyComponent } from './pages/create-keys/create-key.component';
import { KeyCategoryDetailViewComponent } from './pages/key-category-detail-view/key-category-detail-view.component';
import { KeysDetailViewComponent } from './pages/keys-detail-view/keys-detail-view.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'keys',
    component: KeyComponent,
  },
  {
    path: 'key-categories',
    component: KeyCategoriesComponent,
  },
  {
    path: 'create-key-categories',
    component: CreateKeyCategoriesComponent,
  },
  {
    path: 'create-keys',
    component: CreateNewKeyComponent,
  },
  {
    path: 'key-categories/:id',
    component: KeyCategoryDetailViewComponent,
  },
  {
    path: 'keys/:id',
    component: KeysDetailViewComponent,
  },
];
