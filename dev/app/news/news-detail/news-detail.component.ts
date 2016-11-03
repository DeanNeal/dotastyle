import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'news-detail',
  templateUrl: './news-detail.component.html'
  // styleUrls:  ['./news.component.scss']
})
export class NewsDetailComponent {
  private sub: any;
  params;
	constructor (
      private route: ActivatedRoute,
	) {}

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
        this.params = params;
    });

  }

}
