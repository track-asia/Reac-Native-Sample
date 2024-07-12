import React, { useState } from 'react';
import TrackAsiaGL from '@track-asia/trackasia-react-native';

import sheet from '../../styles/sheet';
import gridPattern from '../../assets/grid_pattern.png';
import smileyFaceGeoJSON from '../../assets/smiley_face.json';
import Page from '../common/Page';

const layerStyles = {
  background: {
    backgroundPattern: gridPattern,
  },
  smileyFace: {
    fillAntialias: true,
    fillColor: 'white',
    fillOutlineColor: 'rgba(255, 255, 255, 0.84)',
  },
};

function GeoJSONSource() {
  const [mapRef, setMapRef] = useState(null);
  return (
    <Page>
      <TrackAsiaGL.MapView
        ref={setMapRef}
        style={sheet.matchParent}
        styleURL="https://maps.track-asia.com/styles/v1/streets.json?key=public_key">
        <TrackAsiaGL.Camera
          zoomLevel={2}
          centerCoordinate={[-35.15165038, 40.6235728]}
        />

        <TrackAsiaGL.VectorSource>
          <TrackAsiaGL.BackgroundLayer
            id="background"
            style={layerStyles.background}
          />
        </TrackAsiaGL.VectorSource>

        <TrackAsiaGL.ShapeSource id="smileyFaceSource" shape={smileyFaceGeoJSON}>
          <TrackAsiaGL.FillLayer
            id="smileyFaceFill"
            style={layerStyles.smileyFace}
          />
        </TrackAsiaGL.ShapeSource>
      </TrackAsiaGL.MapView>
    </Page>
  );
}

export default GeoJSONSource;
