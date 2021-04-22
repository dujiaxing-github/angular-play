import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts!: any[];


  constructor(private service: PostService) { 
   }
  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(Response => {
        (<any>this.posts) = Response;
        console.log(Response);
    }, error => {
      alert('An unexpected error occurred.');
      console.log(error);
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    //this.http.post(this.url, JSON.stringify(post))
    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response;
        //post = response.id;
        this.posts.splice(0, 0, post);
        console.log(response);
      }, 
      (error: Response) => {
        if (error.status == 400) {
          // this.form.setErrors(error.json());
        }
        else {
          alert('An unexpected error occurred.');
          console.log(error);          
        }
      });
  
  } 

/*
  name!: String;
  result!: String;

  postData() {
    this.http.post(this.url, {
      name:this.name
    }).toPromise().then((data: any) => {
      console.log(data.name);
      //console.log(JSON.stringify(data.json));
      this.result = data.name;
    })
  }
  */

  updatePost(post: any) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response);
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

  deletePost(post: any) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(index);
      }, 
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('This post has already been deleted.');
        else {
          alert('An unexpected error occurred.');
          console.log(error);
        }
      });
    
  }

}
