
// to get the decorector feature '@'
import {Component} from '@angular/core';

@ Component({
  selector: 'app-post-create',
  templateUrl: 'create.component.html'
})

export class PostCreateComponent {
// tslint => ':string' is redundant
  newString = 'No comment';
  entryString = '';

  onAddNewPost(): void {

    // this.newString = 'Add new Post success';
    this.newString = this.entryString;
  }
}

// [property] html's tag property = "field value in the class"
// <p>{{field value output simple string}}</p>
// (event) = "handler"

// #postString, onAddNewPost(postString)
// [(ngModel)] = 'entryString'

