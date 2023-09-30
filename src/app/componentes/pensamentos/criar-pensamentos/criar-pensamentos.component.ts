import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {


  pensamento: Pensamento = {
    id: 0,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert('Pensamento criado com sucesso!');
  }

  cancelarPensamento() {
    alert('Pensamento cancelado com sucesso!');
  }
}
