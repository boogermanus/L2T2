import { Component } from '@angular/core';
import { L2T2Component } from "./components/l2-t2/l2-t2.component";

@Component({
    selector: 'app-root',
    imports: [
        L2T2Component
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Long 2 Travel 2';
}
