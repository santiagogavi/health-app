import React, { useState } from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native"

export default function RegisterScreen({onClose}:any) {
    return (
        <View>
            <Text>sign up</Text>
            <TouchableOpacity  onPress={onClose}>
                <Text>Back to Login </Text>
                
                </TouchableOpacity>
        </View>
    )
}