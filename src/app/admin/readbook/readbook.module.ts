import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhpBookComponent } from './php-book/php-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadbookRoutingModule } from './readbook-routing.module';
import { ReadbookComponent } from './readbook.component';



@NgModule({
  declarations: [PhpBookComponent,ReadbookComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReadbookRoutingModule
  ]
})
export class ReadbookModule { }
