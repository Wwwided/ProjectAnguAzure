import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TwitteCardComponent } from '../twitte-card/twitte-card.component';
import { CurrentComponent } from '../current/current.component';

@Component({
  selector: 'app-twittes',
  standalone: true,
  imports: [CommonModule, TwitteCardComponent, CurrentComponent],
  templateUrl: './twittes.component.html',
  styleUrl: './twittes.component.css'
})
export class TwittesComponent {
  
	isConnected = true;

  currentTweet = {
    id: 1,
    username: 'User1',
    content: 'Content1',
};

  tweetList = [
    {
        id: 1,
        username: 'User1',
        content: 'Content1',
    },
    {
        id: 2,
        username: 'User2',
        content: 'Content2',
    },
    {
        id: 3,
        username: 'User3',
        content: 'Content3',
    },
];

      afficherElement(tweet: any) {
        console.log(tweet);
        this.currentTweet = tweet;
      }
}
