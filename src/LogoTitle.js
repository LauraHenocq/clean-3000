import React from 'react';
import {Image} from 'react-native';

export const LogoTitle = () => {
    return (
        <Image
            style={{width: 80, height:80, resizeMode:"contain"}}
            source={require("../assets/logo-clean3000-transparent.png")}
        />
    )
}