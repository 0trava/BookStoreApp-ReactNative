import React from 'react';
import { 
    Image,
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
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.primary,
                        height: 40,
                        paddingLeft: 3,
                        paddingRight: SIZES.radius,
                        borderRadius: 20,
                    }}
                    onPress={()=> {console.log("Point")}}
                >
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: 30,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25,
                            backgroundColor: 'rgba(0,0,0,0.5)'
                        }}>
                            <Image 
                            source={icons.plus_icon}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20
                            }}
                            />
                        </View>

                        <Text style={{
                            marginLeft: SIZES.base,
                            color: COLORS.white,
                            ...FONTS.body3,
                            }}> {profile.point} point</Text>

                    </View>
                </TouchableOpacity>
            </View>
        )

    }

    function renderButtonSection() {
        return (
            <View style={{
                flex: 1, 
                justifyContent: 'center',
                padding: SIZES.padding, }}>
                    <View style={{
                        flexDirection: 'row',
                        height: 70,
                        backgroundColor: COLORS.secondary,
                        borderRadius: SIZES.radius
                    }}>
                        {/* Claim */}


                        {/* Divider */}


                    </View>

            </View>
        )
    }


  return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.black }}>
            <View style={{ height: 200 }}>
                {renderHeader(profile)}
                {renderButtonSection()}

            </View>

        </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({})