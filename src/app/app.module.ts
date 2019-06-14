import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { RouterModule, Routes } from "@angular/router";


import { CookieService } from 'ngx-cookie-service';
import { AppService } from './directive/app.service';
import { Ng5SliderModule } from 'ng5-slider';
import { BarRatingModule } from "ngx-bar-rating";
import { NgxPaginationModule } from 'ngx-pagination';


import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ConfigurationService } from "./services/configuration/configuration.service";
import { CategoryService } from "./services/category/category.service";
import { SiteheaderComponent } from "./siteheader/siteheader.component";
import { SearchComponent } from "./search/search.component";
import { CartComponent } from "./cart/cart.component";
import { SliderComponent } from "./slider/slider.component";
import { FeaturedComponent } from "./featured/featured.component";
import { ProductGridComponent } from "./product-grid/product-grid.component";
import { LatestNewsComponent } from "./latest-news/latest-news.component";
import { MenuItemComponent } from "./siteheader/menu-item/menu-item.component";
import { NewsletterComponent } from "./newsletter/newsletter.component";
import { SitefooterComponent } from "./sitefooter/sitefooter.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { HomeComponent } from "./home/home.component";
import { BannerComponent } from './component/banner/banner.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ButtonComponent } from './component/button/button.component';
import { CartListComponent, ListComponent } from './component/cart-list/cart-list.component';
import { CustomLabelComponent } from './component/custom-label/custom-label.component';
import { InputFieldComponent } from './component/input-field/input-field.component';
import { AccountComponent } from './account/account.component';
import { CustomCheckboxComponent } from './component/custom-checkbox/custom-checkbox.component';
import { ImgComponent } from './component/img/img.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShopComponent } from './shop/shop.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { BestSellerComponent } from './component/best-seller/best-seller.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { ShopColorComponent } from './component/shop-color/shop-color.component';
/** load this at startup */
export function loadConfigurations(configurationService: ConfigurationService) {
  return () => configurationService.loadConfigurations();
}

/**
 * Outch not easy to create a class executed at startup. I expect to be a better Angular dev,
 * could barely undestand what i have done ... carl
 */



const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  },
  {
    path: "shoppingcart",
    component: ShoppingCartComponent
  },
  {
    path: "account",
    component: AccountComponent
  },
  {
    path: "shop",
    component: ShopComponent
  },
  {
    path: "wishlist",
    component: WishListComponent
  }
];


export function createTranslateLoader(http: HttpClient) {

  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    SiteheaderComponent,
    SearchComponent,
    CartComponent,
    SliderComponent,
    FeaturedComponent,
    ProductGridComponent,
    LatestNewsComponent,
    MenuItemComponent,
    NewsletterComponent,
    SitefooterComponent,
    CheckoutComponent,
    HomeComponent,
    BannerComponent,
    ShoppingCartComponent,
    ButtonComponent,
    CartListComponent,
    CustomLabelComponent,
    InputFieldComponent,
    ListComponent,
    AccountComponent,
    CustomCheckboxComponent,
    ImgComponent,
    ProductListComponent,
    ShopComponent,
    WishListComponent,
    BestSellerComponent,
    CategoriesComponent,
    ShopColorComponent

  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    HttpModule,
    Ng5SliderModule,
    BarRatingModule,
    NgxPaginationModule
  ],
  providers: [
    /** load merchant and configurations */
    ConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfigurations,
      deps: [ConfigurationService],
      multi: true
    },
    CategoryService,
    TranslateModule,
    AppService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
