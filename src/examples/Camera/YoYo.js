import React from 'react';
import TrackAsiaGL from '@track-asia/trackasia-react-native';

import sheet from '../../styles/sheet';
import { SF_OFFICE_COORDINATE } from '../../utils';
import Page from '../common/Page';

class YoYo extends React.Component {
  timeout = null;

  constructor(props) {
    super(props);

    this.state = {
      zoomLevel: 2,
    };
  }

  componentDidMount() {
    this.cameraLoop();
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  cameraLoop() {
    requestAnimationFrame(async () => {
      const nextZoomLevel = this.state.zoomLevel === 6 ? 2 : 6;
      this.setState({ zoomLevel: nextZoomLevel });
      this.timeout = setTimeout(() => this.cameraLoop(), 2000);
    });
  }

  render() {
    return (
      <Page>
        <TrackAsiaGL.MapView
          ref={ref => (this.map = ref)}
          style={sheet.matchParent}
          styleURL="https://maps.track-asia.com/styles/v1/streets.json?key=public_key">
          <TrackAsiaGL.Camera
            zoomLevel={this.state.zoomLevel}
            centerCoordinate={SF_OFFICE_COORDINATE}
          />
        </TrackAsiaGL.MapView>
      </Page>
    );
  }
}

export default YoYo;
