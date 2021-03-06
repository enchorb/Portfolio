import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'hammerjs';

// Modules
import {SharedModule} from './modules/shared/shared.module';

// Components
import { AppComponent } from './app.component';

// Services
import { SafeHtmlPipe } from './pipes/safe-html';

@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
