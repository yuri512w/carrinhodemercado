



```
ng update @angular/core @angular/cli
npm install @ionic/angular-toolkit@latest
```

## Install the Stripe (cordova) plugin not for Capacitor 

```
ionic cordova plugin add cordova-plugin-stripe
npm install --save @ionic-native/stripe
```

## Ionic Native (peer dependency issue fix)

```
npm WARN @ionic-native/stripe@5.31.1 requires a peer of @ionic-native/core@^5.1.0 but none is installed. You must install peer dependencies yourself.
```

You need to install manually as below

```
npm i @ionic-native/core
```




