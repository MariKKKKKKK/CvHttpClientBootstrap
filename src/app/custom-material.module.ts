import {NgModule} from '@angular/core';
import {
  MdCardModule,
  MdListModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';

@NgModule(
  {
    imports: [ MdListModule, MdSidenavModule, MdCardModule,  MdToolbarModule],
    exports: [ MdListModule, MdSidenavModule, MdCardModule,  MdToolbarModule]
  }
)
export class CustomMaterialModule {
}
