import React from 'react'
import {
  View
} from 'react-vr'
import VideoElement from './elements/VideoElement.js'
import Button from './elements/Button.js'
//Layout
class VideoPlayerLayout extends React.Component {
  render() {
    return (
      <View>
        <View style={{
          flex: 1,
          width: 8,
          flexDirection: 'column',
          alignItems: 'stretch',
          backgroundColor: '#333333',
          layoutOrigin: [0.5, 0.5],
          transform: [{ translate: [0, 0, -5] }]
        }}>
          <VideoElement />
        </View>
        <View style={{
          flex: 1,
          width: 2.5,
          flexDirection: 'column',
          alignItems: 'stretch',
          layoutOrigin: [0.5, 0.5],
          transform: [{ translate: [0, 0, 5] }]
        }}>
          <Button showButton={this.props.showButton} text={this.props.text} />
        </View>
      </View>
    )
  }
}
module.exports = VideoPlayerLayout
