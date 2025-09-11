import {Component, EventEmitter, Input, Output} from '@angular/core';
import { task } from "./task.model";
import {CardComponent} from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id)
  }
}
