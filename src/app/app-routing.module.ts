import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserToDoComponent } from './user-to-do/user-to-do.component';
import { UsersService } from './users.service';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'todo',component:UserToDoComponent },
  {path:'users',component:UsersComponent },
  {path:'userTodos/:id',component:UserToDoComponent },
  {path:'',component:UsersComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
