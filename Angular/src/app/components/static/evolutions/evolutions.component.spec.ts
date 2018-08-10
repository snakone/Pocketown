import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionsComponent } from './evolutions.component';

describe('EvolutionsComponent', () => {
  let component: EvolutionsComponent;
  let fixture: ComponentFixture<EvolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
