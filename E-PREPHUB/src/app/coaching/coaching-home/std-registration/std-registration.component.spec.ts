import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdRegistrationComponent } from './std-registration.component';

describe('StdRegistrationComponent', () => {
  let component: StdRegistrationComponent;
  let fixture: ComponentFixture<StdRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
