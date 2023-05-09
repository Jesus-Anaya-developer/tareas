import { Component } from '@angular/core';
import { tarea } from 'src/app/models/tarea/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent {

  listTask: tarea[] = [];
  nameTask: string = '';

  addTask() {
    //crear objeto tarea
    const tarea: tarea = {
      nombre: this.nameTask,
      estado: false
    }
    //agregar objeto tarea al array
    this.listTask.push(tarea);
    //reset form
    this.nameTask = '';
  }

  deleteTask(index: number): void {
    this.listTask.splice(index, 1);
  }

}
