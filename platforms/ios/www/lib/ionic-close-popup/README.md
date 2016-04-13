# ionic-close-popup
Close Ionic popup when tapping outside it's bounds

Here is a little Codepen to show a live example: http://codepen.io/mvidailhet/pen/JYwYEE

![alt](http://i.imgur.com/mBTNIMs.gif)

## Install

Install it with bower

```shell
$ bower install ionic-close-popup
```

Include the `ionic.closePopup` module in your app's dependencies:

```javascript
angular.module('app', ['ionic', 'ionic.closePopup'])
```

## Usage

Register your newly created popup to the `closePopupService` service :

```javascript
    var alertPopup = $ionicPopup.alert({
      title: 'Alert popup',
      template: 'Tap outside it to close it'
    });
    IonicPopupHider.register(alertPopup);
```

That's it! Your popup will close if you tap outside of it.
