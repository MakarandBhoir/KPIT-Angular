import { Component } from "@angular/core";

@Component({
    selector: 'app-message2',
    template: '<p class="font">message 2 works!</p>',
    styles: [`
        .font {
            color: red;
            background-color: antiquewhite;
            padding: 10px;
            font-family: 'Segoe UI';
            font-size: 18px;
}
    `]
})
export class Message2Component {

}