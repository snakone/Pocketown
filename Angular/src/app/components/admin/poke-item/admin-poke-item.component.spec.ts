import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpokeItemComponent } from './admin-poke-item.component';

describe('AdminpokeItemComponent', () => {
  let component: AdminpokeItemComponent;
  let fixture: ComponentFixture<AdminpokeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpokeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpokeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
