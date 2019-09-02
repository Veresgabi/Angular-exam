import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerService } from './logger.service';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookComponent } from './books/book/book.component';
import { BookService } from './books/book.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    LoggerService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
