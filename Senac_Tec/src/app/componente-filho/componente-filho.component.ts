import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent implements OnInit {

  @Input() public nomeFilho:string = 'Nome do filho';
  @Output() public event = new EventEmitter();
  public contador: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(){
    this.contador += 1;
    this.event.emit(this.contador);
  }

}
