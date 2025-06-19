import {Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

@Component({
    selector: 'app-start',
    templateUrl: './start.html',
    styleUrls: ['./start.scss'],
    imports: [
        NgOptimizedImage
    ],
    standalone: true
})
export class StartComponent {
    constructor(private router: Router) {
    }
    toChooseHero() {
        this.router.navigate(['/hero']);
    }
}