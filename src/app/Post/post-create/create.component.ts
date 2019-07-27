
// to get the decorector feature '@'
import {Component} from '@angular/core';

@ Component({
  selector: 'app-post-create',
  templateUrl: 'create.component.html'
})

export class PostCreateComponent {
// tslint => ':string' is redundant
  newString = '';

  onAddNewPost(): void {
    this.newString = 'Add new Post success';

  }
}

