import {Directive, OnInit, Input, TemplateRef, ComponentRef, ViewContainerRef} from '@angular/core';
import {ErrorBoxComponent} from "./error-box.component";

@Directive({
  selector: '[appHasErrorBox]',

})
export class HasErrorBoxDirective implements OnInit {
  private direction: string = "left";

  @Input('appHasErrorBoxDirection') set hasErrorBoxDirection(dir: string) {
    this.direction = dir;
    if (!!this.wrapperContainer?.instance)
      this.wrapperContainer.instance.direction = dir;
  }

  private errorTemplate: TemplateRef<any>;

  @Input('appHasErrorBox') set appHasErrorBoxErrorTemplate(template: TemplateRef<any>) {
    this.errorTemplate = template;
    if (!!this.wrapperContainer?.instance)
      this.wrapperContainer.instance.errorTemplate = this.errorTemplate;
  }

  private wrapperContainer: ComponentRef<ErrorBoxComponent>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  ngOnInit() {
    console.log("inited");
    this.wrapperContainer = this.viewContainerRef.createComponent(ErrorBoxComponent);
    this.wrapperContainer.instance.direction = this.direction;
    this.wrapperContainer.instance.template = this.templateRef;
    this.wrapperContainer.instance.errorTemplate = this.errorTemplate;
  }
}
