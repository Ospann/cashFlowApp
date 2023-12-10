import React from 'react'
import { View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Colors from '../constants/Colors'

export const Circle = () => (
    <View
        style={{
            width: '25%',
            aspectRatio: '1 / 1',
            borderRadius: 60,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        {/* <FontAwesome name="plus" size={36} color={Colors.light.text} /> */}
    </View>
)
