import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServidorService } from '../../Servidor/servidor.service';
import { Horarios } from '../../Entidad/Horarios';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{

	//inyeccion de dependencias
	constructor(private router: Router, private service: ServidorService){}

	ngOnInit(): void {
		this.listar();
	}

	horarios !: Horarios[];
	horario : Horarios = new Horarios();

	listar(){
		this.service.listarH().subscribe(data => {
			this.horarios = data;
		})
	}

	editar(horario: Horarios){
		localStorage.setItem('idHorario', horario.idHorario.toString());
		Swal.fire({
			icon: 'success',
			title: 'EDITAR',
			text: 'LOS DATOS SE CARGARON CORRECTAMENTE'
		})
		this.router.navigate(['editar']);
	}

	eliminar(horario: Horarios){
		localStorage.setItem('idHorario', horario.idHorario.toString());
		Swal.fire({
			icon: 'success',
			title: 'ELIMINAR',
			text: 'LOS DATOS SE CARGARON CORRECTAMENTE'
		})
		this.router.navigate(['eliminar']);
	}

	buscarPorDia(){
		this.service.buscarPorDia(this.horario).subscribe(data => {
			this.horarios = data;
		})
	}
}
