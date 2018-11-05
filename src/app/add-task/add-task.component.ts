import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output() newTask = new EventEmitter<any>();

  task: any = {
    title: '',
    date: null,
    description: ''
  };

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.newTask.emit({ 
      title: this.task.title,
      date: this.task.date,
      description: this.task.description
    });

    this.task = {
      title: '',
      date: null,
      description: ''
    }
  }

}
