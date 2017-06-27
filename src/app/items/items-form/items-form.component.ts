import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item';

@Component({
  selector: 'items-form',
  templateUrl: './items-form.component.html',
  styleUrls: ['./items-form.component.scss']
})

export class ItemsFormComponent {

  item: Item = new Item();

  constructor(private itemSvc: ItemService) { }

  createItem() {
    this.itemSvc.createItem(this.item)
    this.item = new Item() // reset item
  }

}
