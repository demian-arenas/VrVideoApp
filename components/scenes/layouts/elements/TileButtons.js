import React from 'react'
import {
  Text,
  View,
  VrButton
} from 'react-vr'

//Element
class TileButtons extends React.Component {

  render() {
    return (
      <View style={{ marginTop: -0.09, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ margin: 0.1, height: 0.6, backgroundColor: "#CAB9E5" }}>
            <VrButton>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>

              </Text>
            </VrButton>
          </View>
          <View style={{ margin: 0.1, height: 0.6, backgroundColor: "#CAB9E5" }}>
            <VrButton>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>

              </Text>
            </VrButton>
          </View>
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ margin: 0.1, height: 0.6, backgroundColor: "#CAB9E5" }}>
            <VrButton>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>

              </Text>
            </VrButton>
          </View>
          <View style={{ margin: 0.1, height: 0.6, backgroundColor: "#CAB9E5" }}>
            <VrButton>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>

              </Text>
            </VrButton>
          </View>
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ margin: 0.1, height: 0.6, backgroundColor: "#CAB9E5" }}>
            <VrButton>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>

              </Text>
            </VrButton>
          </View>
          <View style={{ margin: 0.1, height: 0.6, backgroundColor: "#CAB9E5" }}>
            <VrButton>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>

              </Text>
            </VrButton>
          </View>
        </View>

      </View>
    )
  }
}

module.exports = TileButtons
