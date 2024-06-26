import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  name!: string;

  ngOnInit() {
    // Check if the name is already stored in localStorage
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      // If the name is already stored, use it
      this.name = storedName;
    } else {
      // If the name is not stored, prompt the user for their name
      this.promptForName();
    }
  }

  promptForName() {
  }
}
