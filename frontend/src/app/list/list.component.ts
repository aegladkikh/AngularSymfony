import {Component, OnInit} from '@angular/core';
import {List} from "./list";
import {ListService} from "./list.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [ListService],
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: List[] | undefined;

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.listService.getList()
      .subscribe(list => (this.list = list));
  }
}
