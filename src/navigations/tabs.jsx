import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./shop";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import { COLORS, FONTS } from "../themes";
import { Ionicons } from '@expo/vector-icons/';

const bottomTab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <bottomTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: FONTS.regular,
                    fontSize: 10,

                },
                tabBarStyle: {
                    backgroundColor: COLORS.wihte,
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.grey,
                tabBarIconStyle: {
                    fontSize: 22,
                },
            }}
        >
            <bottomTab.Screen name="ShopTab" component={ShopNavigator}
                options={{
                    tabBarLabel: 'Shop',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={20} color={color} />
                    ),
                    
                }} />
            <bottomTab.Screen name="CartTab" component={CartNavigator}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? 'cart' : 'cart-outline'} size={20} color={color} />
                    ),
                    tabBarBadge:2,
                    tabBarBadgeStyle:{
                        backgroundColor:COLORS.black,
                        color:COLORS.wihte,
                        fontFamily:FONTS.regular,
                        fontSize:11,
                    }
                }} />
            <bottomTab.Screen name="OrdersTab" component={OrdersNavigator}
                options={{
                    tabBarLabel: 'Orders',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? 'file-tray' : 'file-tray-outline'} size={20} color={color} />
                    ),
                }}
            />


        </bottomTab.Navigator>
    )
}

export default TabNavigator;