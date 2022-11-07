import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public visivel: boolean = true;
  public listaNome:Array<string> = [ 'Clara', 'Debora', 'Felipe','gustavo','Henrique', "Matehus", 'Ryan', 'Thiago C','Thiago S','Valentino']

public nome: string = '';
public data: Date = new Date;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
    this.data = new Date();
    }, 1000)
  }
  exibirRemover(){
    this.visivel = !this.visivel;
  }
}
