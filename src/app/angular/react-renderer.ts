import {Component, Injector, OnInit} from '@angular/core';
import {ReactApplication} from '../react/react-application';

@Component({
  selector: 'app-react-renderer',
  template: `<div class="react-container" id="react-renderer">1111Hello From React Renderer</div>`
})
export class ReactRendererComponent implements OnInit {
  constructor(public injector: Injector) { }

  ngOnInit() {
    ReactApplication.initialize('react-renderer', this.injector);
  }
}