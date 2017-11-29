import React from 'react'
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
  render() {
    //<TitleScene showButton={true} text={"Watch a Video"}/>
    //<Dashboard showButton={false} text={"Select Environment"}/>
    return (
      <View>
        <VideoPlayer showButton={true} text={'Back to Dashboard'}/>
      </View>
    )
  }
}
AppRegistry.registerComponent('VrVideoApp', () => VrVideoApp)
