import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Colors from '../constants/Colors'

interface CenterButtonProps extends TouchableOpacityProps {
    onPress: () => void
    focused?: boolean
}

export const CenterButton = ({ onPress, focused }: CenterButtonProps) => (
    <TouchableOpacity
        onPress={onPress}
        style={{ flex: 1, paddingBottom: 30, alignItems: 'center', justifyContent: 'center' }}
    >
        <View
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <FontAwesome name="plus" size={36} color={Colors.light.text} />
        </View>
    </TouchableOpacity>
)
