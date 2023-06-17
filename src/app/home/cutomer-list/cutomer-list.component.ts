import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-cutomer-list',
  templateUrl: './cutomer-list.component.html',
  styleUrls: ['./cutomer-list.component.scss']
})
export class CutomerListComponent implements OnInit{
  
  constructor(){}

  @Input() customers: Customer[] | null = [];
  ngOnInit(): void {

  }
}
