import { Routes } from '@angular/router';
import { Admin } from './Components/admin/admin';
import { ControlFlowComponent } from './Components/control-flow/control-flow';   
import { Databinding } from './Components/databinding/databinding';
import { SignalEx } from './Components/signal-ex/signal-ex';
import { AddDirective } from './Components/add-directive/add-directive';
import { GetApi } from './Components/get-api/get-api';
import { User } from './Components/user/user';

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
    },
     {
        path: 'Attribute-directives',
        component: AddDirective
    },
    {
        path: 'GetApi',
        component:GetApi
    },
    {
        path: 'users',
        component:User
    }
];

// 