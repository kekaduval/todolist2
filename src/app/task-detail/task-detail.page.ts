import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {

  task: any;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.task = this.taskService.selectedTask;
  }

}
