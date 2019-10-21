import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { OrdersModule } from './orders/orders.module';
import { NgbModule, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

const appRoutes: Routes = [
  { path: "", component: AppComponent },
  { path: "login", loadChildren: './login/login.module#LoginModule' },
  { path: "all-orders", loadChildren: './orders/orders.module#OrdersModule' }
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    LoginModule,
    OrdersModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
