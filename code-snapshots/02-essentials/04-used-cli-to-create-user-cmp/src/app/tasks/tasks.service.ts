import {newTaskData, task} from "./task/task.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class tasksService{

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId == userId)
  }

  deleteTask(id: string) : void {
    this.tasks = this.tasks.filter((task) => task.id != id)
  }

  AddTask(newTask: newTaskData, userId: string){
    this.tasks.push({
      id : this.getNewTaskId(),
      userId : userId,
      title : newTask.title,
      summary : newTask.summary,
      dueDate : newTask.dueDate
    })
  }

  getNewTaskId() : string {
    let lastId = this.tasks[this.tasks.length -1].id
    let lastIdIntString = lastId.slice(1);
    let idInt = parseInt(lastIdIntString, 10);

    return 't' + idInt+1;
  }

  private tasks : task[] = [
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
}
