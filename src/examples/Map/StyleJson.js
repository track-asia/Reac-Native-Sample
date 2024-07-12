import React from 'react';
import { Text, StyleSheet } from 'react-native';
import TrackAsiaGL from '@track-asia/trackasia-react-native';

import StyleJsonExample from '../../assets/style-json-example.json';
import StyleJsonExample2 from '../../assets/style-json-example2.json';
import Page from '../common/Page';
import Bubble from '../common/Bubble';

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

const defaultCamera = {
  centerCoordinate: [-78.54382, 40.446947],
  zoomLevel: 3,
  minZoomLevel: 3,
};

class StyleJson extends React.Component {
  state = {
    showAltStyle: false,
  };

  onPress = () => {
    this.setState({
      showAltStyle: !this.state.showAltStyle,
    });
  };

  render() {
    return (
      <Page>
        <TrackAsiaGL.MapView
          styleURL="https://maps.track-asia.com/styles/v1/streets.json?key=public_key"
          style={styles.map}>
          <TrackAsiaGL.Camera defaultSettings={defaultCamera} />
          <TrackAsiaGL.Style
            json={
              this.state.showAltStyle ? StyleJsonExample2 : StyleJsonExample
            }
          />
        </TrackAsiaGL.MapView>
        <Bubble onPress={this.onPress}>
          <Text>{this.state.showAltStyle ? 'Style 2' : 'Style 1'}</Text>
        </Bubble>
      </Page>
    );
  }
}

export default StyleJson;
