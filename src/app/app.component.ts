import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {PropertyListPage} from '../pages/property-list/property-list';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = WelcomePage;

    appMenuItems: Array<MenuItem>;

    accountMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        this.appMenuItems = [
            {title: 'Accueil', component: PropertyListPage, icon: 'ios-home-outline'},
            {title: 'Interprête', component: BrokerListPage, icon: 'ios-people-outline'},
            {title: 'Favoris', component: FavoriteListPage, icon: 'ios-heart-outline'},
            {title: 'Chat', component: WelcomePage, icon: 'ios-chatbubbles-outline'},
        ];

        this.accountMenuItems = [
            {title: 'Mon compte', component: WelcomePage, icon: 'ios-contact-outline'},
            {title: 'Se deconnecter', component: WelcomePage, icon: 'log-out'},
        ];

        this.helpMenuItems = [
            {title: 'Bienvenue', component: WelcomePage, icon: 'ios-bookmark-outline'},
            {title: 'A propos', component: AboutPage, icon: 'ios-information-circle-outline'},
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }
}
