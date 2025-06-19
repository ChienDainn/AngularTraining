import { Routes } from '@angular/router';
import { Admin } from './Components/admin/admin';
import { ControlFlowComponent } from './Components/control-flow/control-flow';   
import { Databinding } from './Components/databinding/databinding';
import { SignalEx } from './Components/signal-ex/signal-ex';

export const routes: Routes = [
    
    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'control-flow-statment',
        component: ControlFlowComponent
    },
    {
        path: 'dataBinding',
        component: Databinding
    },
    {
        path: 'signal',
        component: SignalEx
    }
];

// 