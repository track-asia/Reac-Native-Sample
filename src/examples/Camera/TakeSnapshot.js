import React from 'react';
import TrackAsiaGL from '@track-asia/trackasia-react-native';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ActivityIndicator,
} from 'react-native';

import Page from '../common/Page';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  snapshot: {
    flex: 1,
  },
  spinnerContainer: {alignItems: 'center', flex: 1, justifyContent: 'center'},
});

class TakeSnapshot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      snapshotURI: null,
    };
  }

  componentDidMount() {
    this.takeSnapshot();
  }

  async takeSnapshot() {
    const {width, height} = Dimensions.get('window');

    const uri = await TrackAsiaGL.snapshotManager.takeSnap({
      centerCoordinate: [-74.12641, 40.797968],
      width,
      height,
      zoomLevel: 3,
      pitch: 30,
      heading: 20,
      styleURL: TrackAsiaGL.StyleURL.Default,
      writeToDisk: true,
    });

    this.setState({snapshotURI: uri});
  }

  render() {
    let childView = null;

    if (!this.state.snapshotURI) {
      childView = (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Generating Snapshot</Text>
        </View>
      );
    } else {
      childView = (
        <View style={styles.container}>
          <Image
            source={{uri: this.state.snapshotURI}}
            resizeMode="contain"
            style={styles.snapshot}
          />
        </View>
      );
    }

    return <Page>{childView}</Page>;
  }
}

export default TakeSnapshot;
