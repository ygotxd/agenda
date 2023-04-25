import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-incluir-tarefa',
  templateUrl: './incluir-tarefa.page.html',
  styleUrls: ['./incluir-tarefa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncluirTarefaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
