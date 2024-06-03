import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyCategoriesComponent } from './key-categories.component';

describe('EventsComponent', () => {
  let component: KeyCategoriesComponent;
  let fixture: ComponentFixture<KeyCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
