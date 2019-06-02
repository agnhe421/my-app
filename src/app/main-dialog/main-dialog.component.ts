import { Component, OnInit } from '@angular/core';
import { POSTS } from '../mock-posts'

@Component({
  selector: 'app-main-dialog',
  templateUrl: './main-dialog.component.html',
  styleUrls: ['./main-dialog.component.scss']
})
export class MainDialogComponent implements OnInit {
  posts = POSTS;

constructor() { }
public isAnswerCorrect = false; 
public correctAnswerId: number; 

  ngOnInit() {
  }
  selectAnswer(alternative: string, id: number) {
    console.log(alternative, id); 
    console.log('post', this.posts[id-1]);

    if(alternative === this.posts[id-1].correctAlternative){
      console.log('correct answer');
      this.isAnswerCorrect = true; 
      this.correctAnswerId = id;
    }
    else{
      this.isAnswerCorrect = false; 
    }
  }

}
