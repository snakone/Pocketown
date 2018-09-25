import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePokemonComponent } from './profile-pokemon.component';

describe('ProfilePokemonComponent', () => {
  let component: ProfilePokemonComponent;
  let fixture: ComponentFixture<ProfilePokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
