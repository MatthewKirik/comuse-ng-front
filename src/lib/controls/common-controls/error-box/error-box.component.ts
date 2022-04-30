import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  TemplateRef, ViewChild, ViewContainerRef
} from '@angular/core';

let allowedDirections :string[] = ["left", "right", "top", "bottom"];

@Component({
  selector: 'app-error-box, [app-error-box]',
  templateUrl: './error-box.component.html',
  styleUrls: ['./error-box.component.scss']
})
export class ErrorBoxComponent implements AfterViewChecked, OnInit {
  @Input() public direction: string = "left";
  @Input() template: TemplateRef<any>;
  @Input() errorTemplate: TemplateRef<any>;

  getDirectionClass() {
    return allowedDirections.includes(this.direction) ? this.direction : "left";
  }

  ngAfterViewChecked(): void {
    // console.log(this.template);
    // const view = this.template.createEmbeddedView({});
    // this.vc.insert(view);
  }

  ngOnInit(): void {
  }
}
