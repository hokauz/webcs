import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Component, Injector, NgModuleFactory, ViewChild, ViewContainerRef } from '@angular/core';

function makeScript(type: string, src: string) {
  const script = document.createElement('script');
  script.src = src;
  return script;
}


class Custom extends HTMLElement {
  shadow;
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'closed'});    
    // const shadow = this.attachShadow({ mode: 'closed' });
    // shadow.innerHTML = `<div><slot name="main"></slot></div>`;

  }
  connectedCallback() {
    setTimeout(() => {
      this.shadow.append(...this.children as any);
    });
  }
}


// customElements.define('my-el', Custom);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webc';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const extra = makeScript('script', 'http://localhost:8080/extrato/main.js');
    const pagam = makeScript('script', 'http://localhost:8080/pagamento/main.js');
    
    document.body.appendChild(extra);
    document.body.appendChild(pagam);
  }
}
