import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../screens";
import { COLORS, FONTS } from "../themes";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={() => ({
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTitleStyle: {
                    fontFamily: FONTS.bold,
                    fontSize: 20,
                },
                title: 'Carrito'

            })}>
            <Stack.Screen
                name="Cart"
                component={Cart}
            />
        </Stack.Navigator>
    )
}

export default CartNavigator;