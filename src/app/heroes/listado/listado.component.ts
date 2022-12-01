import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes:string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeBorrado:string = '';
  estaBorrado:boolean = false;
  borrarHeroe():void{
    const heroeDel= this.heroes.shift() || '';
    //console.log('Borrado : ',heroeDel);
    this.heroeBorrado = heroeDel;
    this.estaBorrado = true;
  }


}
