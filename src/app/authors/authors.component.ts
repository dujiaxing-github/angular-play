import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;

  // constructor(service: CoursesService) { 
  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
