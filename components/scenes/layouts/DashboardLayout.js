import React from 'react'
import {
  View,
  Animated
} from 'react-vr'
import { Easing } from 'react-native'

import MenuButtons from './elements/MenuButtons.js'
import TileButtons from './elements/TileButtons.js'
import ProgressCircles from './elements/ProgressCircles.js'
import Button from './elements/Button.js'
//Layout
class DashboardLayout extends React.Component {
  constructor() {
    super()
    this.state = { slideLeft: new Animated.Value(-1), fadeIn: new Animated.Value(0) }
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slideLeft,
          {
            toValue: 0,
            duration: 2000,
            easing: Easing.ease
          }
        ),
        Animated.timing(
          this.state.fadeIn,
          {
            toValue: 1,
            duration: 2000,
            easing: Easing.ease
          }
        )
      ])
    ]).start()
  }

  render() {
    return (
      <View>
        <Animated.View
          style={{
            width: 5,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            layoutOrigin: [0.5, 0.5],
            opacity: this.state.fadeIn,
            transform: [
              { translateX: this.state.slideLeft },
              { translateZ: -3 }
            ],
            marginTop: -0.3
          }}
        >
          <MenuButtons />
          <TileButtons />
          <ProgressCircles />
        </Animated.View>
        <View style={{
          width: 5,
          height: 0.5,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          layoutOrigin: [0.5, 0.5],
          transform: [{ translate: [0, 0, -3] }],
          marginTop: -0.7
        }}>
          <Button text={this.props.text} />
        </View>
      </View>
    )
  }
}
module.exports = DashboardLayout
