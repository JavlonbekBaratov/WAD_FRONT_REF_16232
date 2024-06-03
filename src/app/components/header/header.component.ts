import { Component, inject } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [MatButtonModule, MatTooltipModule, MatMenuModule],
})
export class HeaderComponent {
  router = inject(Router);
  title: string = 'KeyStore';
  disableCreateButton: boolean = false;

  ngOnInit() {
    this.router.events.subscribe(() => {
      // Get the current route path
      const currentRoute = this.router.url;

      this.disableCreateButton = !(
        currentRoute.includes('/keys') ||
        currentRoute.includes('/key-categories')
      );
    });
  }
  toggleAddTask() {
    console.log('add');
  }
  btnClick(name: string) {
    this.router.navigateByUrl(name);
  }
}
