import React from 'react';
import TrackAsiaGL from '@track-asia/trackasia-react-native';

import sheet from '../../styles/sheet';
import smileyFaceGeoJSON from '../../assets/smiley_face.json';
import Page from '../common/Page';

const layerStyles = {
  smileyFaceLight: {
    fillAntialias: true,
    fillColor: 'white',
    fillOutlineColor: 'rgba(255, 255, 255, 0.84)',
  },
  smileyFaceDark: {
    fillAntialias: true,
    fillColor: 'black',
    fillOutlineColor: 'rgba(0, 0, 0, 0.84)',
  },
};

class TwoByTwo extends React.Component {
  renderMap(styleURL, layerStyle) {
    return (
      <TrackAsiaGL.MapView
        zoomLevel={2}
        centerCoordinate={[-35.15165038, 40.6235728]}
        onSetCameraComplete={this.onUpdateZoomLevel}
        ref={ref => (this.map = ref)}
        style={sheet.matchParent}
        styleURL="https://maps.track-asia.com/styles/v1/streets.json?key=public_key">
        <TrackAsiaGL.ShapeSource id="smileyFaceSource" shape={smileyFaceGeoJSON}>
          <TrackAsiaGL.FillLayer id="smileyFaceFill" style={layerStyle} />
        </TrackAsiaGL.ShapeSource>
      </TrackAsiaGL.MapView>
    );
  }

  render() {
    return (
      <Page>
        {this.renderMap(
          TrackAsiaGL.StyleURL.Default,
          layerStyles.smileyFaceDark,
        )}
        {this.renderMap(
          TrackAsiaGL.StyleURL.Default,
          layerStyles.smileyFaceLight,
        )}
      </Page>
    );
  }
}

export default TwoByTwo;
