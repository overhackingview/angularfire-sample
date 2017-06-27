import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service'
import { FirebaseListObservable} from 'angularfire2/database';


@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  public items: FirebaseListObservable<any>;

  constructor(private itemSvc: ItemService) { }

  ngOnInit() {
    this.items = this.itemSvc.getItemsList({limitToLast: 5})
  }

  deleteItems() {
    this.itemSvc.deleteAll()
  }
}
