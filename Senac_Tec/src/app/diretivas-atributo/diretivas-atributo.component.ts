import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributo',
  templateUrl: './diretivas-atributo.component.html',
  styleUrls: ['./diretivas-atributo.component.css']
})
export class DiretivasAtributoComponent implements OnInit {

  //NgClass
  public azulVermelho:boolean = false;
  public classe:string = 'Azul';
  //NgStyle
  public TamFont: String = '20px';
  public CorFundo: string = 'green';


  constructor() { }

  ngOnInit(): void {

  }

}
