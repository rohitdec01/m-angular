import {Route} from '@angular/router';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {AddUpdateEmployeeComponent} from './add-update-employee/add-update-employee.component';

const routes: Route[] = [
  {component: HomeComponent, path: ''},
  {component: AddUpdateEmployeeComponent, path: 'add'},
  {component: AddUpdateEmployeeComponent, path: 'add/:id'},
  {component: ListEmployeeComponent, path: 'list'},
  {component: LoginComponent, path: 'login'},
  {component: RegisterComponent, path: 'register'},
];
export default routes;
