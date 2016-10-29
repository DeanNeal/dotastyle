import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.scss']
})

export class AppComponent { 
	menuLinks: any;

	constructor (

	) {

	}

	ngOnInit(params) {
		this.menuLinks = [
			// {name: 'Pick', link: 'pick'}, 
			{name: 'News', link: 'news'},
			{name: 'Profile', link: 'profile'}
			// {name: 'Heroes', link: 'heroes'}
		];	

	}


}