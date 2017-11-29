import React from 'react'
import axios from 'react-native-axios'
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr'
import TitleScene from './components/scenes/TitleScene.js'
import Dashboard from './components/scenes/Dashboard.js'
import VideoPlayer from './components/scenes/VideoPlayer.js'
export default class VrVideoApp extends React.Component {
  constructor() {
    super();
    this.state = { previews: "" }
  }
  gatherPreviews(response) {
    const previews = response.data.featured.map(function (feat) {
      return feat.stream.preview.large;
    });
    this.setState({ previews: previews });
  }
  gatherStreamIDs(response) {
    const IDs = response.data.featured.map(function (feat) {
      return feat.stream._id;
    })
  }
  componentWillMount() {
    axios.get('https://api.twitch.tv/kraken/streams/featured?limit=6&client_id=skawlpb80ixx8e9cxafxepbn66xhe1')
      .then(response => {
        this.gatherPreviews(response);
        this.gatherStreamIDs(response);
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    //<TitleScene showButton={true} text={"Watch a Video"}/>
    //<VideoPlayer showButton={true} text={'Back to Dashboard'} />
    return (
      <View>
        <Dashboard previews={this.state.previews} showButton={false} text={"Select Environment"} />
      </View>
    )
  }
}
AppRegistry.registerComponent('VrVideoApp', () => VrVideoApp)
