import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Horarios } from '../../Entidad/Horarios';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ServidorService } from '../../Servidor/servidor.service';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService) { }

	horario : Horarios = new Horarios();

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

	eliminar(){
		this.service.eliminarH(this.horario).subscribe(() =>{
			Swal.fire({
				text: 'Se elimino correctamente la informacion',
				icon: 'success'
			})
			this.router.navigate(['listar']);
		})
	}

	cancelar(){
		this.router.navigate(['listar']);
	}
}
