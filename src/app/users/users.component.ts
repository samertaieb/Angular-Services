import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: []=[];

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(result=>{this.users=JSON.parse(JSON.stringify(result))},
    error=>{console.log("serveur ma yjawebch")},
    ()=>{console.log("t7ebch 7aja o5ra");
    })
  }

}
