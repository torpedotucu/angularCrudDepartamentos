import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit{
  public departamento!:Departamento;
  constructor(
    private _activeRoute:ActivatedRoute
  ) {
    
  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      let id=parseInt(params["id"]);
      let nombre=params["nombre"];
      let localidad=params["localidad"];
      this.departamento=new Departamento(id,nombre,localidad);
    })
    //otra posibilidad: StackOverflow
    // let localidad2=this._activeRoute.snapshot.paramMap.get('localidad');
    // console.log(localidad2);
  }
}
