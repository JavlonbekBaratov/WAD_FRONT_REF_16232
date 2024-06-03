import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyComponent } from './keys.component';

describe('ParticipantsComponent', () => {
  let component: KeyComponent;
  let fixture: ComponentFixture<KeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
