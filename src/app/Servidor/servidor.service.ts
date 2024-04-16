import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horarios } from '../Entidad/Horarios';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  constructor(private http: HttpClient) { }

	url = 'http://localhost:8011/horario';

	listarH(){
		return this.http.get<Horarios[]>(this.url + "/listar");
	}

	buscarH(horario: Horarios){
		return this.http.post<Horarios>(this.url + "/buscar", horario);
	}

	guardarH(horario: Horarios){
		return this.http.post<String>(this.url + "/guardar", horario);
	}
	
	editarH(horario: Horarios){
		return this.http.post<String>(this.url + "/editar", horario);
	}

	eliminarH(horario: Horarios){
		return this.http.post<String>(this.url + "/eliminar", horario);
	}

	buscarPorDia(horario: Horarios){
		return this.http.post<Horarios[]>(this.url + "/buscarPorDiaSemana", horario);
	}
}
