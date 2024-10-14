import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernslaveryComponent } from './modernslavery.component';

describe('ModernslaveryComponent', () => {
  let component: ModernslaveryComponent;
  let fixture: ComponentFixture<ModernslaveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernslaveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModernslaveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
