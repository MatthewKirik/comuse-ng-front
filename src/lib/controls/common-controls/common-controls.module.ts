import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorBoxComponent } from './error-box/error-box.component';
import { HasErrorBoxDirective } from './error-box/has-error-box.directive';



@NgModule({
    declarations: [
        ErrorBoxComponent,
        HasErrorBoxDirective
    ],
    exports: [
      ErrorBoxComponent,
      HasErrorBoxDirective
    ],
    imports: [
        CommonModule
    ],
    entryComponents: [
      ErrorBoxComponent
    ]
})
export class CommonControlsModule { }
