import {Component} from "@angular/core";

@Component({
    selector: 'app-choose-hero',
    templateUrl: './choose-hero.html',
    styleUrls: ['./choose-hero.scss'],
    standalone: true
})
export class ChoseHeroComponent {
    constructor() {
    }

    chooseBlack() {
        alert('Вы выбрали Черныша')
    }

    chooseRobo() {
        alert('Вы выбрали Робо')
    }

}