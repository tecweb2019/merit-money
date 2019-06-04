import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPessoaComponent } from './details-pessoa.component';

describe('DetailsPessoaComponent', () => {
  let component: DetailsPessoaComponent;
  let fixture: ComponentFixture<DetailsPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
