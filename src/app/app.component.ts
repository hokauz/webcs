import { Component } from '@angular/core';

function makeScript(type: string, src: string) {
  const script = document.createElement('script');
  script.src = src;
  return script;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webc';

  ngOnInit() {
    const extra = makeScript('script', 'http://localhost:8080/extrato/main.js');
    const pagam = makeScript('script', 'http://localhost:8080/pagamento/main.js');
    
    document.body.appendChild(extra);
    document.body.appendChild(pagam);
  }



}
