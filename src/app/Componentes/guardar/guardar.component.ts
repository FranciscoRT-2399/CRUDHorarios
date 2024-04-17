import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../Servidor/servidor.service';
import { Horarios } from '../../Entidad/Horarios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guardar.component.html',
  styleUrl: './guardar.component.css',
})
export class GuardarComponent {
  constructor(private router: Router, private service: ServidorService) {}

  horario: Horarios = new Horarios();

  guardar() {
    this.service.guardarH(this.horario).subscribe(
      () => {
        Swal.fire({
          title: 'Guardado exitosamente',
          icon: 'success',
        });

        this.router.navigate(['listar']);
      },
      () => {
        Swal.fire({
          title: 'Error!',
          text: 'Ocurrio un error al guardar la actividad',
          icon: 'error',
        });
      }
    );
  }

	cancelar(){
		this.router.navigate(['listar']);
	}
}
