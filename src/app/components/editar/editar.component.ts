import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{


  public departamento!:Departamento;

  @ViewChild("cajaId") cajaId!:ElementRef;
  @ViewChild("cajaNombre") cajaNombre!:ElementRef;
  @ViewChild("cajaLocalidad") cajaLocalidad!:ElementRef;

  constructor(private _service:ServiceDepartamentos,
    private _activeRoute:ActivatedRoute,
    private _router:Router
  ){}

  ngOnInit(): void {
    let idDepartamento=""
    this._activeRoute.params.subscribe((params:Params)=>{
      idDepartamento=params['id'];
    })
    this._service.findDepartamento(idDepartamento).subscribe((response=>{
      console.log(response);
      this.departamento=response;
    }))
  }
  updateDepartamento():void{
    let id=parseInt(this.cajaId.nativeElement.value);
    let nombre=this.cajaNombre.nativeElement.value;
    let localidad=this.cajaLocalidad.nativeElement.value;
    let editDepartamento=new Departamento(id,nombre,localidad);

    this._service.updateDepartamento(editDepartamento).subscribe((response=>{
      this._router.navigate(['/'])
    }))
  }
}
