import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { FONTS, COLORS } from './themes';
import RootNavigator from './navigations';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
    const [loaded] = useFonts({
        [FONTS.regular]: require('../assets/fonts/Inter-Regular.ttf'),
        [FONTS.bold]: require('../assets/fonts/Inter-Bold.ttf'),
        [FONTS.medium]: require('../assets/fonts/Inter-Medium.ttf'),
        [FONTS.light]: require('../assets/fonts/Inter-Light.ttf'),
    });

    if (!loaded) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator color={COLORS.primary} size="large" />
            </View>
        );
    }
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <RootNavigator />
            </SafeAreaView>
        </Provider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});