import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CADENAS_PIPES } from './pipes/Cadenas.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CADENAS_PIPES
  ],
  exports: [
    CADENAS_PIPES
  ]
})
export class MyCoreModule {
  constructor( @Optional() @SkipSelf() parentModule: MyCoreModule) {
    if (parentModule) {
      const msg = `ModuleName has already been loaded.
        Import ModuleName once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
