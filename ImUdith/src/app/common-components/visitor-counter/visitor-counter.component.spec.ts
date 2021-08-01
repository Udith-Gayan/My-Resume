import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorCounterComponent } from './visitor-counter.component';

describe('VisitorCounterComponent', () => {
  let component: VisitorCounterComponent;
  let fixture: ComponentFixture<VisitorCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
