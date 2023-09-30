import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listarPensamentos = [
    {
      conteudo: 'Eu Amo React',
      autoria: 'Wener Rodrigo',
      modelo: 'modelo2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
