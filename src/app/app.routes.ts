import { Routes } from '@angular/router';
import { StartComponent} from "./pages/start/start";
import { ChoseHeroComponent } from "./pages/choose-hero/choose-hero";

export const routes: Routes = [{
        path: '',
        component: StartComponent
    },
    {
        path: 'hero',
        component: ChoseHeroComponent
    }
];
