import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { NewItemComponent } from './new-item/new-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';


@NgModule({
  declarations: [NewItemComponent, EditItemComponent, ItemDetailsComponent],
  imports: [
    CommonModule, ItemsRoutingModule
  ],
  exports: [NewItemComponent, EditItemComponent, ItemDetailsComponent]
})
export class ItemsModule { }
