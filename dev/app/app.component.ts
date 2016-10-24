import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl: './dev/app/app.component.html',
  styleUrls:  ['./dev/scss/styles.css', './dev/app/app.component.css']
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