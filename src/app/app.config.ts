import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"frstprojectmkt","appId":"1:891388999542:web:d3866373ba591ee330ac57","storageBucket":"frstprojectmkt.appspot.com","apiKey":"AIzaSyC3ifEhqNFbgdJPisbgQ-l1yFPhQZfBW0w","authDomain":"frstprojectmkt.firebaseapp.com","messagingSenderId":"891388999542","measurementId":"G-FX21GM47P2"})), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
