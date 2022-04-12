import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { UserService } from '../user.service';

@Component({ templateUrl: 'home.component.html' })

export class HomeComponent {
  loading = false;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.loading = true;
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.loading = false;
          this.users = users;
      });
  }
}
