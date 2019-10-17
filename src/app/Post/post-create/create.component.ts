
// to get the decorector feature '@'
import {Component} from '@angular/core';

@ Component({
  selector: 'app-post-create',
  templateUrl: 'create.component.html'
})

export class PostCreateComponent {
// call api in this class?
// tslint => ':string' is redundant
  newString = 'No comment';
  entryname = '';
  entrymac = '';
  onAddNewPost(): void {

    // this.newString = 'Add new Post success';
    this.newString = this.entryname;

  }
}

// [property] html's tag property = "field value in the class"
// <p>{{field value output simple string}}</p>
// (event) = "handler"

// #postString, onAddNewPost(postString), postString is an HTML input element

// [(ngModel)] = 'entryString'

// angular/material add two new dependency in the package.json

