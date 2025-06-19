import { Component } from '@angular/core';

import {ControlFlowComponent} from './Components/control-flow/control-flow';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'MyApp';
}
