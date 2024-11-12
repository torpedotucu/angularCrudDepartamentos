import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  @ViewChild("cajaId") cajaId!:ElementRef;
  @ViewChild("cajaNombre") cajaNombre!:ElementRef;
  @ViewChild("cajaLocalidad") cajaLocalidad!:ElementRef;

  constructor(private _service:ServiceDepartamentos, private _router:Router){}

  crearDepartamento():void{
    let idDepartamento=this.cajaId.nativeElement.value;
    let nombre=this.cajaNombre.nativeElement.value;
    let localidad=this.cajaLocalidad.nativeElement.value;
    let newDepartamento=new Departamento(idDepartamento,nombre,localidad);
    console.log(newDepartamento);
    this._service.createDepartamentos(newDepartamento).subscribe(response=>{
      console.log(response);
      this._router.navigate(["/"]);
    })
  }
}
