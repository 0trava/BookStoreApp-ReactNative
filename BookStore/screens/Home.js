import React from 'react';
import { 
    SafeAreaView,
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View } from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const Home = () => {

    const profileData ={
        name: 'Username',
        point: 200,

    }

    const [profile, setProfile] = React.useState(profileData);

    function renderHeader(profile) {
        return (
            <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center' }}>
                {/* Greetings */}
                    <View style={{flex: 1}}>
                        <View style={{marginRight: SIZES.padding}}>
                            <Text style={{ ...FONTS.h3, color: COLORS.white}}>Good Morning</Text>
                            <Text style={{ ...FONTS.h2, color: COLORS.white}}>{profile.name}</Text>
                        </View>
                    </View>

                {/* Points */}
                <TouchableOpacity>
                    
                </TouchableOpacity>
            </View>
        )

    }


  return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.black }}>
            <View style={{ height: 200 }}>
                {renderHeader(profile)}

            </View>

        </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({})