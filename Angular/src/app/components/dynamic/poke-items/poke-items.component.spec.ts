import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { pokeItemsComponent } from './poke-items.component';

describe('pokeItemsComponent', () => {
  let component: pokeItemsComponent;
  let fixture: ComponentFixture<pokeItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ pokeItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(pokeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
