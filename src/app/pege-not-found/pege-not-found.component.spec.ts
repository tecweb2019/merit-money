import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegeNotFoundComponent } from './pege-not-found.component';

describe('PegeNotFoundComponent', () => {
  let component: PegeNotFoundComponent;
  let fixture: ComponentFixture<PegeNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegeNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegeNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
