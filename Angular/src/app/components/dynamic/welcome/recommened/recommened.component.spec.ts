import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommenedComponent } from './recommened.component';

describe('RecommenedComponent', () => {
  let component: RecommenedComponent;
  let fixture: ComponentFixture<RecommenedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommenedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
