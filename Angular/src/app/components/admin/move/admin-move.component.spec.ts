import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMoveComponent } from './admin-move.component';

describe('AdminMoveComponent', () => {
  let component: AdminMoveComponent;
  let fixture: ComponentFixture<AdminMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
