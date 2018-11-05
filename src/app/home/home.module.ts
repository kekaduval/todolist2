import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskListComponent } from '../task-list/task-list.component';

// When I autogenerate a component, the CLI automatically declares the component in the
// App module. If I only want to use a component in the Home page, like I do with 
// AddTaskComponent and TaskListComponent, I need to remove it from the App module
// and declare it in the HomeModule.

// CLI = command line interface.

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, AddTaskComponent, TaskListComponent]
})
export class HomePageModule {}


// Declarations:  Where i put all of my component that are part of that module.