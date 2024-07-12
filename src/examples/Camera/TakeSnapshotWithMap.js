import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import TrackAsiaGL from '@track-asia/trackasia-react-native';

import sheet from '../../styles/sheet';
import colors from '../../styles/colors';
import Page from '../common/Page';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary.blueLight,
    height: 60,
    justifyContent: 'center',
  },
  buttonText: {color: 'white'},
  imageContainer: {flex: 0.5},
  map: {
    flex: 0.5,
  },
  mapContainer: {flex: 1},
});

class TakeSnapshotWithMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uri: '',
    };
  }

  async onTakeSnapshot() {
    const uri = await this.map.takeSnap(false);
    this.setState({uri});
  }

  render() {
    return (
      <Page>
        <View style={styles.mapContainer}>
          <TrackAsiaGL.MapView ref={ref => (this.map = ref)} style={styles.map}>
            <TrackAsiaGL.Camera
              zoomLevel={8}
              pitch={45}
              centerCoordinate={[-122.400021, 37.789085]}
            />
          </TrackAsiaGL.MapView>

          <View style={styles.imageContainer}>
            {this.state.uri ? (
              <Image
                resizeMode="contain"
                style={sheet.matchParent}
                source={{uri: this.state.uri}}
              />
            ) : null}
          </View>
        </View>

        <TouchableOpacity onPress={() => this.onTakeSnapshot()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Take snapshot</Text>
          </View>
        </TouchableOpacity>
      </Page>
    );
  }
}

export default TakeSnapshotWithMap;
