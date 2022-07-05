import { Component } from '@angular/core';

// import { Feature, features } from './features.data';

@Component({
  selector: 'aa-test',
  templateUrl: './test.component.html',
})
export class testComponent {
  showAllFeatures = false;

  // get features(): Feature[] {
  //   return this.showAllFeatures ? features : features.slice(0, 8);
  // }
}
