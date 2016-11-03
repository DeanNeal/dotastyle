import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent {
    news = [];
    constructor(

    ) { }

    ngOnInit() {

        this.news = [{
            id: 1,
            label: 'new',
            img: 'http://dota2.ru/img/news/t1446992917.jpg',
            title: 'История Dota 2, с чего все начиналось',
            descr: 'Уже 5 лет прошло после того, как Valve анонсировали Dota 2, а сейчас мы уже видим, что это одна из самых известных игр в мире. Давайте же пробежимся по истории становления доты такой популярной. В этой новости мы соберем много ссылок на самые основные новости. В общем, ностальгии пост. Небольшое...',
            update: 'вчера в 19:09'
        }, {
            id: 2,
            label: 'new',
            img: 'http://dota2.ru/img/news/t1446535640.jpg',
            title: 'Кто поедет на The Summit 4?',
            descr: 'Квалификации к четвёртому турниру, организованному студией BeyondTheSummit, подходят к концу. И уже в течение этой недели будут определены восемь команд-участниц, которые отправятся прямиком в Лос Анджелес. Турнир будет проводиться в течение четырёх дней: с 9-го по 13-е декабря текущего года...',
            update: 'вчера в 09:57'
        }]
    }

}
