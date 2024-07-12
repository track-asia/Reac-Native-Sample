import React, {useState, useEffect, ReactElement} from 'react';
import {Alert} from 'react-native';
import TrackAsiaGL from '@track-asia/trackasia-react-native';

import sheet from '../../styles/sheet';
import {onSortOptions} from '../../utils';
import TabBarPage from '../common/TabBarPage';

const ShowMap = (): ReactElement => {
  const _mapOptions = Object.keys(TrackAsiaGL.StyleURL)
    .map(key => {
      return {
        label: key,
        data: (TrackAsiaGL.StyleURL as any)[key], // bad any, because enums
      };
    })
    .sort(onSortOptions);

  const [styleURL, setStyleURL] = useState({styleURL: _mapOptions[0].data});

  useEffect(() => {
    TrackAsiaGL.locationManager.start();

    return (): void => {
      TrackAsiaGL.locationManager.stop();
    };
  }, []);

  const onMapChange = (
    index: number,
    newStyleURL: TrackAsiaGL.StyleURL,
  ): void => {
    setStyleURL({styleURL: newStyleURL});
  };

  const onUserMarkerPress = (): void => {
    Alert.alert('You pressed on the user location annotation');
  };

  return (
    <TabBarPage scrollable options={_mapOptions} onOptionPress={onMapChange}>
      <TrackAsiaGL.MapView
        styleURL="https://maps.track-asia.com/styles/v1/streets.json?key=public_key"
        style={sheet.matchParent}>
        <TrackAsiaGL.Camera followZoomLevel={2} followUserLocation />

        <TrackAsiaGL.UserLocation onPress={onUserMarkerPress} />
      </TrackAsiaGL.MapView>
    </TabBarPage>
  );
};

export default ShowMap;
