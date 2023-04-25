import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncluirTarefaPage } from './incluir-tarefa.page';

describe('IncluirTarefaPage', () => {
  let component: IncluirTarefaPage;
  let fixture: ComponentFixture<IncluirTarefaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IncluirTarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
