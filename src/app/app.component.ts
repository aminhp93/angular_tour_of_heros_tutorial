import { Component } from '@angular/core';

export class Hero{
	id: number;
	name: string;
}


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
		<h1>{{title}}</h1>
	    <h2>{{hero.name}} details!</h2>
	    <div><label>id: </label>{{hero.id}}</div>
	    <div>
	      <label>name: </label>
	      <input [(ngModel)]="hero.name" placeholder="name">
	    </div>
	  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hero = {
  	id: 1,
  	name: 'Windstorm'
  };
}

