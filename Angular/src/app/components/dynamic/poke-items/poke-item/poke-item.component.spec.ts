import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeItemComponent } from './poke-item.component';

describe('PokeItemComponent', () => {
  let component: PokeItemComponent;
  let fixture: ComponentFixture<PokeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
