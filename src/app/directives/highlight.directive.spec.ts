import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    let paragraph = document.createElement("p")
    const directive = new HighlightDirective(new ElementRef(paragraph));
    expect(directive).toBeTruthy();
  });


  it('should change the color of the paragraph to yellow', () => {
    let paragraph = document.createElement("p")
    const directive = new HighlightDirective(new ElementRef(paragraph));
    expect(paragraph.style.backgroundColor).toBe("yellow");
  });


});





