# Android Installation

## Access tokens

Note that the Android SDK is slightly peculiar in that it
_requires_ setting an access token, even though it will be `null` for
most users (only Mapbox authenticates this way). Even if it feels odd,
you have to have a line like this in your code before using the SDK.
You can put this near the top of your `App.js` for convenience.

```javascript
TrackAsiaGL.setAccessToken(null);
```

## Setting connection status

TODO: check if this is still an issue with TrackAsia Native on Android (issue #21).

If you are hosting styles and sources on localhost, you might need to set
the connection status manually for the SDK to be able to use them.
See [mapbox/mapbox-gl-native#12819](https://github.com/mapbox/mapbox-gl-native/issues/12819).

Manually sets the connectivity state of the app, bypassing any checks to the
`ConnectivityManager`. Set to `true` for connected, `false` for disconnected,
and `null` for the normal `ConnectivityManager` behavior.

```js
import TrackAsiaGL from "@track-asia/trackasia-react-native";

TrackAsiaGL.setConnected(true);
```
