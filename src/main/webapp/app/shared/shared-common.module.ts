import { NgModule } from '@angular/core';

import { SdgSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SdgSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SdgSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SdgSharedCommonModule {}
