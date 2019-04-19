import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users: User[]; // array of User
constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.list().subscribe(UserSvcList => {this.users = UserSvcList;
                                                  console.log(this.users); }
    );

  }

}
