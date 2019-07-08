import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input('appHighlight') highlightColor: string;

  @HostListener('click') upvote() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') downvote() {
    this.highlight(highlight);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = yellow;
  }
}