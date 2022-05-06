# Capacitor Electron Plugin

- Repo: <https://github.com/capacitor-community/electron>

Primer crearem un nou projecte pel plugin de capacitor (https://capacitorjs.com/docs/plugins/creating-plugins)
```
npm init @capacitor/plugin
```

Responem a les preguntes:
```
√ What should be the npm package of your plugin?
 ... capacitor-electron
√ What directory should be used for your plugin?
 ... capacitor-electron
√ What should be the Package ID for your plugin?
 ... com.metacodi.capacitor.electron
√ What should be the class name for your plugin?
 ... CapacitorElectron
√ What is the repository URL for your plugin?
 ... https://github.com/metacodi/capacitor-electron
√ (optional) Who is the author of this plugin?
 ... Metacodi, S.L.
√ What license should be used for your plugin?
 » MIT
√ Enter a short description of plugin features.
 ... Capacitor Electron Plugin
```

Entrem a la carpeta del projecte de plugin:
```
cd capacitor-electron
```

Instal·lem el package `rimraf` que fa falta:
```
npm i rimraf
```

Fem un build per generar la distribució del plugin:
```
npm run build
```

Després crearem un nou projecte per provar el plugin
```
npm start test-plugin
```

Entrem a la carpeta del projecte de test:
```
cd test-plugin
```

Instal·lem electron al projecte de destí (https://capacitor-community.github.io/electron/docs/gettingstarted/):
```
npm i @capacitor-community/electron
```

Instal·lem el plugin al projecte de destí:
```
npm i ../capacitor-electron
```

`package.json`
```json
{
  "dependencies": {
    "@capacitor-community/electron": "^4.1.0",
    "capacitor-electron": "file:../capacitor-electron",
  }
}
```

Afegim codi per la configuració del projete d'electron
(https://capacitor-community.github.io/electron/docs/configoptions)

`electron/capacitor.config.ts`
```typescript
/// <reference types="@capacitor/splash-screen" />

import { ElectronCapacitorConfig } from '@capacitor-community/electron';

const config: ElectronCapacitorConfig = {
  appId: 'test.metacodi.com',
  appName: 'novaApp',
  bundledWebRuntime: false,
  webDir: 'www',
  electron: {
    // Custom scheme for your app to be served on in the electron window.
    customUrlScheme: 'capacitor-electron',
    // Switch on/off a tray icon and menu, which is customizable in the app.
    trayIconAndMenuEnabled: true,
    // Switch on/off whether or not a splashscreen will be used.
    splashScreenEnabled: false,
    // Custom image name in the electron/assets folder to use as splash image (.gif included)
    splashScreenImageName: 'splash.png',
    // Switch on/off if the main window should be hidden until brought to the front by the tray menu, etc.
    hideMainWindowOnLaunch: false,
    // Switch on/off whether or not to use deeplinking in your app.
    deepLinkingEnabled: false,
    // Custom protocol to be used with deeplinking for your app.
    deepLinkingCustomProtocol: 'mycapacitorapp',
  },
  plugins: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    SplashScreen: {
      launchShowDuration: 5000
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;
```

Fem un build del projecte abans de generar la carpeta d'electron:
```
ionic build
```

Afegim electron al projecte de test
```
npx cap add @capacitor-community/electron
```

Copiem els arxius a la carpeta d'electron del projecte, sincronitzem i obrim l'aplicació d'electron.
```
npx cap copy @capacitor-community/electron && npx cap sync @capacitor-community/electron && npx cap open @capacitor-community/electron
```

## Electron Plugin

[Create a Capacitor Electron Plugin](https://capacitor-community.github.io/electron/docs/creatingplugins/)




<br />

## Mètode `echo`

Des de la carpeta del projecte de test afegim una pàgina `echo` per a provar el mètode definit per defecte al plugin:
```
ng generate page echo
```

Aprofitem el component del projecte de tipus `side-menu` per afegir una ruta al menú:
`app.component.ts`
```typescript
export class AppComponent {
  public appPages = [
    { title: 'Echo', url: '/echo', icon: 'megaphone' },
    ...
  ];
  public labels = ['Echo', ... ];
  constructor() {}
}
```

Fem un build del projecte i executem l'aplicació d'electron
```
ionic build && npx cap copy @capacitor-community/electron && npx cap sync @capacitor-community/electron && npx cap open @capacitor-community/electron
```


Obrim el projecte i accedim a la definició del plugin per afegir un nou mètode:



