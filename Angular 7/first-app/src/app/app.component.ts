import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  h2 {
    color: red;
  }
`]
})
export class AppComponent {
  name = 'Boris Chen';
}
