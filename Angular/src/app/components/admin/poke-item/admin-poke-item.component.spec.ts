import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPokeItemComponent } from './admin-poke-item.component';

describe('AdminPokeItemComponent', () => {
  let component: AdminPokeItemComponent;
  let fixture: ComponentFixture<AdminPokeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPokeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPokeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
