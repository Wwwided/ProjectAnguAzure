import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-twitte-card',
  standalone: true,
  imports: [],
  templateUrl: './twitte-card.component.html',
  styleUrl: './twitte-card.component.css'
})
export class TwitteCardComponent {
  @Input()
	tweet: any;

	@Output()
	ring = new EventEmitter<any>();


	constructor() { }

	ft_output(tweet: any) {
		this.ring.emit(tweet);
	}

}
