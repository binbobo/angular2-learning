import { NgModule } from '@angular/core';
import { AuthRoutingModule, routedComponents } from './auth.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [routedComponents]
})
export class AuthModule { }
