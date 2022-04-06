import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingPortalComponent } from './coaching-portal.component';

describe('CoachingPortalComponent', () => {
  let component: CoachingPortalComponent;
  let fixture: ComponentFixture<CoachingPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachingPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachingPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
