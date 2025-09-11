import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {newTaskData, task} from "./task/task.model";
import {NewTaskComponent} from "./new-task/new-task.component";

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

  tasks = dummyTasks;

  get userTasks() {
    return this.tasks.filter(task => task.userId == this.userId)
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onAddTask(newTask: newTaskData){
    this.tasks.push({
        id : this.getNewTaskId(),
        userId : this.userId,
        title : newTask.title,
        summary : newTask.summary,
        dueDate : newTask.dueDate
      })

    this.isAddingTask = false;
  }

  getNewTaskId() : string {
    let lastId = this.tasks[this.tasks.length -1].id
    let lastIdIntString = lastId.slice(1);
    let idInt = parseInt(lastIdIntString, 10);

    return 't' + idInt+1;
  }

  onCompletedTask(id: string) : void {
    this.tasks = this.tasks.filter((task) => task.id != id)
  }

  onCancelTask(){
    this.isAddingTask = false;
  }
}

const dummyTasks: task[] = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]

