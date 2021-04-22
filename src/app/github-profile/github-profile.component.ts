import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { subscribeOn } from 'rxjs-compat/operator/subscribeOn';


@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  //constructor(private route: ActivatedRoute) { }
  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['/github-followers'], {
      queryParams: { page:1, order: 'newest'}
    });
  }
 

  ngOnInit() {
    console.log("GitHubProfile OnInit")
    /*
    this.route.paramMap
      .subscribe(parmas => {
        let id = parmas.get('id');
        console.log(id);
      })
    */
  }

}