import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectresourcesolutionsComponent } from './projectresourcesolutions.component';

describe('ProjectresourcesolutionsComponent', () => {
  let component: ProjectresourcesolutionsComponent;
  let fixture: ComponentFixture<ProjectresourcesolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectresourcesolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectresourcesolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
