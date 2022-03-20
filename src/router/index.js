import React from 'react';
import { OnBoarding, Login, Register, Authentication, Home, Account, DailyQuestPages, DailyQuestHistory, StakingListPages, StakingDetail, StakingQuestion, ReferralPages, RewardsHistory} from '../pages';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const Router = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false, 
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Authentication" component={Authentication} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="DailyQuestPages" component={DailyQuestPages} />
            <Stack.Screen name="DailyQuestHistory" component={DailyQuestHistory} />
            <Stack.Screen name="StakingListPages" component={StakingListPages} />
            <Stack.Screen name="StakingDetail" component={StakingDetail} />
            <Stack.Screen name="StakingQuestion" component={StakingQuestion} />
            <Stack.Screen name="ReferralPages" component={ReferralPages} />
            <Stack.Screen name="RewardsHistory" component={RewardsHistory} />

        </Stack.Navigator>
    );
}

export default Router;