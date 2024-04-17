import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../Servidor/servidor.service';
import { Horarios } from '../../Entidad/Horarios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService) { }
	horario: Horarios = new Horarios();

	ngOnInit(): void {
		this.buscar();
	}

	buscar(){
		const id = localStorage.getItem('idHorario');
		this.horario.idHorario = Number(id);
		this.service.buscarH(this.horario).subscribe(data =>{
			this.horario = data;
		})
	}

	editar(){
		this.service.editarH(this.horario).subscribe(() =>{
			Swal.fire({
				text: 'Se edito correctamente la informacion',
				icon: 'success'
			})
			this.router.navigate(['listar']);
		})
	}
	cancelar(){
		this.router.navigate(['listar']);
	}
}
