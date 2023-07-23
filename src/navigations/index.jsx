//enrutador de navegacion 

import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./tabs";


function RootNavigator(){
    return(
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}

export default RootNavigator;