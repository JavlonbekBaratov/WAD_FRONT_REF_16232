import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKeyCategoriesComponent } from './create-key-categories.component';

describe('CreateKeyCategoriesComponent', () => {
  let component: CreateKeyCategoriesComponent;
  let fixture: ComponentFixture<CreateKeyCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateKeyCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateKeyCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
