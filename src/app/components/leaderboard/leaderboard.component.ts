import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  
  public users:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(){
    this.userService.getUsers().subscribe(
      (res)=>{
        console.log(res);
        this.users = res;
      },
      (err) =>{
        console.log(err);
        
      }
    );
  }
}
