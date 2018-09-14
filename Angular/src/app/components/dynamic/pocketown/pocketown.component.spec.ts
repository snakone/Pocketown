import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketownComponent } from './pocketown.component';

describe('PocketownComponent', () => {
  let component: PocketownComponent;
  let fixture: ComponentFixture<PocketownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocketownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
