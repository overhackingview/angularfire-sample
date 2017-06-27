import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item';

@Component({
  selector: 'items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.scss']
})

export class ItemsDetailComponent {
  @Input() item: Item;

  constructor(private itemSvc: ItemService) { }

  updateTimeStamp() {
    let date = new Date()
    this.itemSvc.updateItem(this.item.$key, { timeStamp: date })
  }

  updateActive(value: boolean) {
    this.itemSvc.updateItem(this.item.$key, { active: value })
  }

  deleteItem() {
    this.itemSvc.deleteItem(this.item.$key)
  }


}
