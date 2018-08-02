import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedNavComponent } from './fixed-nav.component';

describe('FixedNavComponent', () => {
  let component: FixedNavComponent;
  let fixture: ComponentFixture<FixedNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
