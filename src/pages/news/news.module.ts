import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { NewsPage } from './news';
import { ParallaxHeaderDirective } from '../../directives/parallax-header/parallax-header';

@NgModule({
  declarations: [
    NewsPage,
    ParallaxHeaderDirective
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
  ],
  entryComponents: [
    NewsPage
  ]
})
export class NewsPageModule {}
