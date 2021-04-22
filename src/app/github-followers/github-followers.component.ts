import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../github-followers.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers!: any[];

  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe((Response: any) => {
      (<any>this.followers) = Response;
      console.log(Response);
  });
    /*this.http.get('https://api.github.com/users/mosh-hamedani/followers')
      .subscribe((Response: any) => {
        (<any>this.followers) = Response;
      console.log(Response);
    });
    */
  }

}
