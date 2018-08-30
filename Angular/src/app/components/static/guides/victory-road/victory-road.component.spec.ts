import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictoryRoadComponent } from './victory-road.component';

describe('VictoryRoadComponent', () => {
  let component: VictoryRoadComponent;
  let fixture: ComponentFixture<VictoryRoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictoryRoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictoryRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
