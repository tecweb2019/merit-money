import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaisPessoaComponent } from './detais-pessoa.component';

describe('DetaisPessoaComponent', () => {
  let component: DetaisPessoaComponent;
  let fixture: ComponentFixture<DetaisPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaisPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaisPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
