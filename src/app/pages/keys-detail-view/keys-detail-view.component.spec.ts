import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysDetailViewComponent } from './keys-detail-view.component';

describe('ParticipantsDetailViewComponent', () => {
  let component: KeysDetailViewComponent;
  let fixture: ComponentFixture<KeysDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeysDetailViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeysDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
