import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewKeyComponent } from './create-key.component';

describe('CreateNewKeyComponent', () => {
  let component: CreateNewKeyComponent;
  let fixture: ComponentFixture<CreateNewKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewKeyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateNewKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
