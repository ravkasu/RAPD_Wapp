import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaadvisoryserviceComponent } from './qaadvisoryservice.component';

describe('QaadvisoryserviceComponent', () => {
  let component: QaadvisoryserviceComponent;
  let fixture: ComponentFixture<QaadvisoryserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QaadvisoryserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QaadvisoryserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
