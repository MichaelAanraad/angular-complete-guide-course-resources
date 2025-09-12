import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {newTaskData} from "./task/task.model";
import {NewTaskComponent} from "./new-task/new-task.component";
import {tasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;

  constructor(private tasksService : tasksService) {  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddTask(newTask: newTaskData){
    this.tasksService.AddTask(newTask, this.userId)
    this.isAddingTask = false;
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }
  onCancelTask(){
    this.isAddingTask = false;
  }
}

