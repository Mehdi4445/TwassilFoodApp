import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodCheckInPageRoutingModule } from './food-check-in-routing.module';

import { FoodCheckInPage } from './food-check-in.page';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodCheckInPageRoutingModule,
    SearchbarModule,
    CategoryItemModule,
  ],
  declarations: [FoodCheckInPage]
})
export class FoodCheckInPageModule {}
