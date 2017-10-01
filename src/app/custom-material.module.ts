import {NgModule} from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdListModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';

@NgModule(
  {
    imports: [MdButtonModule, MdCheckboxModule, MdListModule, MdSidenavModule, MdCardModule, MdChipsModule, MdToolbarModule],
    exports: [MdButtonModule, MdCheckboxModule, MdListModule, MdSidenavModule, MdCardModule, MdChipsModule, MdToolbarModule]
  }
)
export class CustomMaterialModule {
}
