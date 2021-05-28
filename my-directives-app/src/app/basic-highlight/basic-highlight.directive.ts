import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appBaiscHighlight]' // square brackets are important
})
export class BasicHighlightDirective implements OnInit{
  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
