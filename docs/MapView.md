<!-- This file was autogenerated from MapView.js do not modify -->
## <TrackAsiaGL.MapView />
### MapView backed by TrackAsia GL Native

### props
| Prop | Type | Default | Required | Description |
| ---- | :--: | :-----: | :------: | :----------: |
| contentInset | `number[] \| number` | `none` | `false` | The distance from the edges of the map view’s frame to the edges of the map view’s logical viewport. |
| style | `ViewProps['style']` | `none` | `false` | Style for wrapping React Native View |
| styleURL | `string` | `none` | `false` | Style URL for map - notice, if non is set it _will_ default to `TrackAsiaGL.StyleURL.Default` |
| styleJSON | `string` | `none` | `false` | StyleJSON for map - according to TileJSON specs: https://github.com/mapbox/tilejson-spec |
| preferredFramesPerSecond | `number` | `none` | `false` | iOS: The preferred frame rate at which the map view is rendered.<br/>The default value for this property is MLNMapViewPreferredFramesPerSecondDefault,<br/>which will adaptively set the preferred frame rate based on the capability of<br/>the user’s device to maintain a smooth experience. This property can be set to arbitrary integer values.<br/><br/>Android: The maximum frame rate at which the map view is rendered, but it can't excess the ability of device hardware.<br/>This property can be set to arbitrary integer values. |
| localizeLabels | `boolean` | `false` | `false` | Automatically change the language of the map labels to the system’s preferred language,<br/>this is not something that can be toggled on/off |
| zoomEnabled | `boolean` | `none` | `false` | Enable/Disable zoom on the map |
| scrollEnabled | `boolean` | `true` | `false` | Enable/Disable scroll on the map |
| pitchEnabled | `boolean` | `true` | `false` | Enable/Disable pitch on map |
| rotateEnabled | `boolean` | `true` | `false` | Enable/Disable rotation on map |
| attributionEnabled | `boolean` | `true` | `false` | Enable/Disable attribution on map.<br/><br/>This must be enabled for TrackAsia-hosted tiles and styles. Please refer to the TrackAsia Terms of Service.<br/>Other providers do not require this. |
| attributionPosition | `\| {
    top?: number;
    left?: number;
  }
\| {
    top?: number;
    right?: number;
  }
\| {
    bottom?: number;
    left?: number;
  }
\| {
    bottom?: number;
    right?: number;
  }` | `none` | `false` | Adds attribution offset, e.g. `{top: 8, left: 8}` will put attribution button in top-left corner of the map |
| tintColor | `string \| unknown[]` | `none` | `false` | MapView's tintColor |
| logoEnabled | `boolean` | `false` | `false` | Enable/Disable the logo on the map. |
| logoPosition | `\| {
    top?: number;
    left?: number;
  }
\| {
    top?: number;
    right?: number;
  }
\| {
    bottom?: number;
    left?: number;
  }
\| {
    bottom?: number;
    right?: number;
  }` | `none` | `false` | Adds logo offset, e.g. `{top: 8, left: 8}` will put the logo in top-left corner of the map |
| compassEnabled | `boolean` | `none` | `false` | Enable/Disable the compass from appearing on the map |
| compassViewPosition | `number` | `none` | `false` | Change corner of map the compass starts at. 0: TopLeft, 1: TopRight, 2: BottomLeft, 3: BottomRight |
| compassViewMargins | `object` | `none` | `false` | Add margins to the compass with x and y values |
| surfaceView | `boolean` | `false` | `false` | [Android only] Enable/Disable use of GLSurfaceView insted of TextureView. |
| onUserLocationUpdate | `func` | `none` | `false` | This event is triggered when the user location is updated.<br/>*signature:*`(location:Location) => void` |
| regionWillChangeDebounceTime | `number` | `10` | `false` | The emitted frequency of regionwillchange events |
| regionDidChangeDebounceTime | `number` | `500` | `false` | The emitted frequency of regiondidchange events |
| children | `ReactNode` | `none` | `true` | FIX ME NO DESCRIPTION |

### methods
#### getPointInView(coordinate)

Converts a geographic coordinate to a point in the given view’s coordinate system.

##### arguments
| Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| `coordinate` | `GeoJSON.Position` | `Yes` | A point expressed in the map view's coordinate system. |



```javascript
const pointInView = await this._map.getPointInView([-37.817070, 144.949901]);
```


#### getCoordinateFromView(point)

Converts a point in the given view’s coordinate system to a geographic coordinate.

##### arguments
| Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| `point` | `Array` | `Yes` | A point expressed in the given view’s coordinate system. |



```javascript
const coordinate = await this._map.getCoordinateFromView([100, 100]);
```


#### getVisibleBounds()

The coordinate bounds(ne, sw) visible in the users’s viewport.

##### arguments
| Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |




```javascript
const visibleBounds = await this._map.getVisibleBounds();
```


#### queryRenderedFeaturesAtPoint(point[, filter][, layerIDs])

Returns an array of rendered map features that intersect with a given point.

##### arguments
| Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| `point` | `tuple` | `Yes` | A point expressed in the map view’s coordinate system. |
| `filter` | `FilterExpression` | `No` | A set of strings that correspond to the names of layers defined in the current style. Only the features contained in these layers are included in the returned array. |
| `layerIDs` | `Array` | `No` | A array of layer id's to filter the features by |



```javascript
this._map.queryRenderedFeaturesAtPoint([30, 40], ['==', 'type', 'Point'], ['id1', 'id2'])
```


#### queryRenderedFeaturesInRect(bbox[, filter][, layerIDs])

Returns an array of rendered map features that intersect with the given rectangle,<br/>restricted to the given style layers and filtered by the given predicate.

##### arguments
| Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| `bbox` | `GeoJSON.BBox` | `Yes` | A rectangle expressed in the map view’s coordinate system. |
| `filter` | `FilterExpression` | `No` | A set of strings that correspond to the names of layers defined in the current style. Only the features contained in these layers are included in the returned array. |
| `layerIDs` | `Array` | `No` |  A array of layer id's to filter the features by |



```javascript
this._map.queryRenderedFeaturesInRect([30, 40, 20, 10], ['==', 'type', 'Point'], ['id1', 'id2'])
```


#### setCamera()

Map camera will perform updates based on provided config. Deprecated use Camera#setCamera.

##### arguments
| Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |



#### takeSnap([writeToDisk])

Takes snapshot of map with current tiles and returns a URI to the image

##### arguments
| Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| `writeToDisk` | `Boolean` | `No` | If true will create a temp file, otherwise it is in base64 |


#### getZoom()

Returns the current zoom of the map view.

##### arguments
| Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |




```javascript
const zoom = await this._map.getZoom();
```


#### getCenter()

Returns the map's geographical centerpoint

##### arguments
| Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |




```javascript
const center = await this._map.getCenter();
```


#### setSourceVisibility(visible, sourceId[, sourceLayerId])

Sets the visibility of all the layers referencing the specified `sourceLayerId` and/or `sourceId`

##### arguments
| Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| `visible` | `boolean` | `Yes` | Visibility of the layers |
| `sourceId` | `string` | `Yes` | Identifier of the target source (e.g. 'composite') |
| `sourceLayerId` | `String` | `No` | Identifier of the target source-layer (e.g. 'building') |



```javascript
await this._map.setSourceVisibility(false, 'composite', 'building')
```


#### showAttribution()

Show the attribution and telemetry action sheet.<br/>If you implement a custom attribution button, you should add this action to the button.

##### arguments
| Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |




