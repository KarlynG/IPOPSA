import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModel {
  username: string = '';
  rol: number = 1;
  email: string = '';
  password: string = '';
  code: string = '';
}
