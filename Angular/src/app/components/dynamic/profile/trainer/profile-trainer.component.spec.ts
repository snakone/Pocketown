import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTrainerComponent } from './profile-trainer.component';

describe('ProfileTrainerComponent', () => {
  let component: ProfileTrainerComponent;
  let fixture: ComponentFixture<ProfileTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
