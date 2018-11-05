import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  taskList: any[] = [];

  constructor(
    private router: Router,
    private taskService: TaskService
  ) {

  }
  
  addTask(task) {
    this.taskList.push(task);
  }

  openTask(task) {
    // give the selected task to the task service so 
    // we can use it in the TaskDetailPage // 
    this.taskService.selectedTask = task;
    this.router.navigate(['/taskDetail']);
  }
}
