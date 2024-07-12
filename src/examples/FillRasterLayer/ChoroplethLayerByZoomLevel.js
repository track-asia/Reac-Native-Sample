import React from 'react';
import TrackAsiaGL from '@track-asia/trackasia-react-native';

import sheet from '../../styles/sheet';
import Page from '../common/Page';

const styles = {
  statePopulation: {
    fillColor: [
      'interpolate',
      ['linear'],
      ['get', 'population'],
      0,
      '#F2F12D',
      500000,
      '#EED322',
      750000,
      '#E6B71E',
      1000000,
      '#DA9C20',
      2500000,
      '#CA8323',
      5000000,
      '#B86B25',
      7500000,
      '#A25626',
      10000000,
      '#8B4225',
      25000000,
      '#723122',
    ],

    fillOpacity: 0.75,
  },

  countyPopulation: {
    fillColor: [
      'interpolate',
      ['linear'],
      ['get', 'population'],
      0,
      '#F2F12D',
      100,
      '#EED322',
      1000,
      '#E6B71E',
      5000,
      '#DA9C20',
      10000,
      '#CA8323',
      50000,
      '#B86B25',
      100000,
      '#A25626',
      500000,
      '#8B4225',
      1000000,
      '#723122',
    ],

    fillOpacity: 0.75,
  },
};

function ChoroplethLayerByZoomLevel() {
  return (
    <Page>
      <TrackAsiaGL.MapView
        styleURL="https://maps.track-asia.com/styles/v1/streets.json?key=public_key"
        style={sheet.matchParent}>
        <TrackAsiaGL.Camera
          centerCoordinate={[-98, 38.88]}
          zoomLevel={3}
          minZoomLevel={3}
        />

        <TrackAsiaGL.VectorSource
          id="population"
          url={'mapbox://mapbox.660ui7x6'}>
          <TrackAsiaGL.FillLayer
            id="state-population"
            sourceLayerID="state_county_population_2014_cen"
            maxZoomLevel={4}
            filter={['==', 'isState', true]}
            style={styles.statePopulation}
          />

          <TrackAsiaGL.FillLayer
            id="county-population"
            sourceLayerID="state_county_population_2014_cen"
            minZoomLevel={4}
            filter={['==', 'isCounty', true]}
            style={styles.countyPopulation}
          />
        </TrackAsiaGL.VectorSource>
      </TrackAsiaGL.MapView>
    </Page>
  );
}

export default React.memo(ChoroplethLayerByZoomLevel);
