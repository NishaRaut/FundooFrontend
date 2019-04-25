import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashiconComponent } from './trashicon.component';

describe('TrashiconComponent', () => {
  let component: TrashiconComponent;
  let fixture: ComponentFixture<TrashiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
