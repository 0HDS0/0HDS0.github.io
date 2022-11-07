import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent implements OnInit {

  public nomePai:string = '';
  public contPai: number = 1;


  constructor() {}

  ngOnInit(): void {}
  RecebeCont(contador: number){
    this.contPai = contador;
  }

}
