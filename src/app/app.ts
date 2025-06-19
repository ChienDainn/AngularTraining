import { Component } from '@angular/core';

import { ControlFlow } from './Components/control-flow/control-flow';

@Component({
  selector: 'app-root',
  imports: [ControlFlow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'MyApp';
}
