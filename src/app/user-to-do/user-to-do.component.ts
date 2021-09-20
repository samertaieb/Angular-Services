import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-to-do',
  templateUrl: './user-to-do.component.html',
  styleUrls: ['./user-to-do.component.css']
})
export class UserToDoComponent implements OnInit {
  idUser: any;
  todos:[]=[]
  constructor(private route :ActivatedRoute, private userservive :UsersService ) { }

  ngOnInit(): void {
    this.idUser=this.route.snapshot.paramMap.get('id');
    this.userservive.getTodosId(this.idUser).subscribe(result=>{this.todos=JSON.parse(JSON.stringify(result))},
    error=>{console.log("serveur ma yjawebch" )},
    ()=>{console.log("chnouwa t7eb a5er");
    }
    )

  }

}

