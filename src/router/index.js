import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoarding, Login, Register, Authentication, Home, Account, DailyQuestPages, DailyQuestHistory, StakingListPages, StakingDetail, StakingQuestion, ReferralPages, RewardsHistory} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="OnBoarding" component={OnBoarding} options = {{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options = {{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options = {{ headerShown: false }} />
            <Stack.Screen name="Authentication" component={Authentication} options = {{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options = {{ headerShown: false }} />
            <Stack.Screen name="Account" component={Account} options = {{ headerShown: false }} />
            <Stack.Screen name="DailyQuestPages" component={DailyQuestPages} options = {{ headerShown: false }} />
            <Stack.Screen name="DailyQuestHistory" component={DailyQuestHistory} options = {{ headerShown: false }} />
            <Stack.Screen name="StakingListPages" component={StakingListPages} options = {{ headerShown: false }} />
            <Stack.Screen name="StakingDetail" component={StakingDetail} options = {{ headerShown: false }} />
            <Stack.Screen name="StakingQuestion" component={StakingQuestion} options = {{ headerShown: false }} />
            <Stack.Screen name="ReferralPages" component={ReferralPages} options = {{ headerShown: false }} />
            <Stack.Screen name="RewardsHistory" component={RewardsHistory} options = {{ headerShown: false }} />

        </Stack.Navigator>
    );
}

export default Router;