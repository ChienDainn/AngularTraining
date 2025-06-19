import { Component, signal } from '@angular/core';
import { SignalEx } from '../signal-ex/signal-ex';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.html',
})
export class ControlFlowComponent {
  // Signals for examples
  showContent = signal(true);
  grade = signal('B');
  items = signal(['Apple', 'Banana', 'Oranges']);
  emptyItems = signal([]);
  user = signal({ name: 'John', age: 30 });
  loading = signal(true);
  value = signal(5);
  currentTab = signal('home');isLoading = signal(false);

////////
    cityList: string[] = ["Pune", "Mumbai", "Panjim", "Nagpur"];
  
  studentList = [
    { name: 'AAAA', city: 'Pune', isActive: false },
    { name: 'BB', city: 'Mumbai', isActive: false },
    { name: 'CCC', city: 'Pune', isActive: true },
    { name: 'DDD', city: 'Nagpur', isActive: false }
  ];

}