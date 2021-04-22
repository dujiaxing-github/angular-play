import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPosts() {
    return this.http.get(this.url)
  }

  createPost(post: any) {
    return this.http.post(this.url, post)
  }

  updatePost(post: any) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
  }

  deletePost(id: any) {
    return this.http.delete(this.url + '/' + id)
      .catch((error: Response) => {
        if (error.status == 404)
          return Observable.throw(new NotFoundError());
        return Observable.throw(new AppError());
      })
    
      
  }

}
