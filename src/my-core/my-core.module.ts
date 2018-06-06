import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CADENAS_PIPES } from './pipes/cadenas.pipe';
import { SizerComponent } from './components/sizer/sizer.component';
import { NUMERICOS_PIPES } from './pipes/numericos.pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CADENAS_PIPES, NUMERICOS_PIPES,
    SizerComponent
  ],
  exports: [
    CADENAS_PIPES, NUMERICOS_PIPES,
    SizerComponent
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
