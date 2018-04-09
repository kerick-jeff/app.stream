import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-youtube',
    template: `
        <ion-header>
            <ion-navbar>
                <ion-title>Youtube Video</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UKO8Hg5L3QI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </ion-content>
    `,
})
export class YoutubeVideo {
    constructor(public navCtrl: NavController) {

    }
}