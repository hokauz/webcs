import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(private elm: ElementRef) { }

  ngOnInit(): void {
    console.log(this.elm.nativeElement);
    // this.elm.nativeElement.attachShadow({mode: 'close'});
  }

}
