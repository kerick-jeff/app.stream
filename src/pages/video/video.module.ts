import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoPage } from './video';

import { VimeoVideo } from '../videos/vimeo';
import { YoutubeVideo } from '../videos/youtube';

@NgModule({
  declarations: [
    VideoPage,
    VimeoVideo,
    YoutubeVideo
  ],
  imports: [
    IonicPageModule.forChild(VideoPage),
  ],
  entryComponents: [
    VideoPage,
    VimeoVideo,
    YoutubeVideo
  ]
})
export class VideoPageModule {}
