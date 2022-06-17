import { Component,Input } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.scss']
})




export class HeaderComponent {
    @Input() USD: number = 0;

    @Input() EUR: number = 0;
}