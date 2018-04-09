import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VimeoVideo } from '../videos/vimeo';
import { YoutubeVideo } from '../videos/youtube';

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) { }

  playVimeo() {
    this.navCtrl.push(VimeoVideo)
  }

  playYoutube() {
    this.navCtrl.push(YoutubeVideo)
  }
}
