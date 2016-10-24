import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.scss']
})

export class AppComponent { 
	menuLinks: any;
	constructor (

	) {}

	ngOnInit() {
		this.menuLinks = [
			// {name: 'Pick', link: 'pick'}, 
			{name: 'News', link: 'news'}
		];	
	}


}