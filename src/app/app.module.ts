import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopingListComponent } from './Shopping/shoping-list/shoping-list.component';
import { RecipeListComponent } from './Recipe/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeItemComponent } from './Recipe/recipe-list/recipe-item/recipe-item.component';
import { ShopingEditComponent } from './Shopping/shoping-list/shoping-edit/shoping-edit.component';
import { RecipeDetailComponent } from './Recipe/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopingListComponent,
    RecipeListComponent,
    RecipeComponent,
    RecipeItemComponent,
    ShopingEditComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
