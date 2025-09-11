import {Component, EventEmitter, Input, Output} from '@angular/core';
import {task} from "../task/task.model";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter();

  onCancelAddTask(){
    this.cancel.emit();
  }
}
