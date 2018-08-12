import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZmoveComponent } from './zmove.component';

describe('ZmoveComponent', () => {
  let component: ZmoveComponent;
  let fixture: ComponentFixture<ZmoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZmoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZmoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
