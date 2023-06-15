import React from "react";
import {Image} from "react-native";
import  {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home} from '../screens/Home' ;
import {COLORS, icons} from '../constants/' ;

const Tab=createBottomTabNavigator();


const tabOptions = {
    showLabel: false,
    style: {
        height: "10%",
        backgroundColor: COLORS.black,
    }

}


// NAVIGATION
const Tabs = () => {
    return (
        <Tab.Navigator
        tabOptions={tabOptions}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
                const tintColor = focused ? COLORS.white : COLORS.gray;

                switch(route.name) {
                    case "Home":
                        return(
                            <Image 
                                source={icons.dashboard_icon}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        )
                }
            }
        })}
        >

        </Tab.Navigator>
    )

}

export default Tabs