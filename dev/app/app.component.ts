import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl: './dev/app/app.component.html',
  styleUrls:  ['./dev/scss/styles.css']
})

export class AppComponent { 
	menuLinks: any;
	constructor (

	) {}

	ngOnInit() {
		this.menuLinks = [{name: 'Pick', link: 'pick'}];	
	}


}