import { Component } from '@angular/core';

import {ControlFlowComponent} from './Components/control-flow/control-flow';

@Component({
  selector: 'app-root',
  imports: [ControlFlowComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'MyApp';
}
