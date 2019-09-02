import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { Newspaper } from '../newspaper.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  private books = [
    new Book('Stars from Eger', 'The revenge of Jumurdzsák'),
    new Book('Boys from Pál street', 'RIP Nemecsek'),
    new Book('Sons of a man with stone heart', '')
  ];

  private newspapers = [
    new Newspaper('Blikk'),
    new Newspaper('Népszabadság'),
    new Newspaper('Magyar Nemzet'),
  ];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  private async getBooks() {
    this.bookService.getBooks().subscribe(
    (res) => {
    this.books = res;
    console.log('res:', res);
    });
    }

}


/* 4.) Az alkalmazás tartalmaz egy BookService nevű service-t. A BookList komponens injektálja be a service-t,
és hívja meg a BookService getBooks metódusát. A metódus által visszaadott értéket
kezeljük le a mefelelő módon, az eredmény könyv tömböt tároljuk el a BookList osztály
books nevű adattagjába! */
