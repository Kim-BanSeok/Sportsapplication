import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TimerScreen from '../screens/TimerScreen';
import RunningScreen from '../screens/RunningScreen';
import HealthAlertScreen from '../screens/HealthAlertScreen';
import IntervalRunningScreen from '../screens/IntervalRunningScreen';

type RootStackParamList = {
  Home: undefined;
  Timer: undefined;
  Running: undefined;
  HealthAlert: undefined;
  IntervalRunning: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: '메인 화면' }} />
      <Stack.Screen name="Timer" component={TimerScreen} options={{ title: '운동 시간 체크' }} />
      <Stack.Screen name="Running" component={RunningScreen} options={{ title: '런닝 시간 체크' }} />
      <Stack.Screen name="HealthAlert" component={HealthAlertScreen} options={{ title: '헬스 운동 알림' }} />
      <Stack.Screen name="IntervalRunning" component={IntervalRunningScreen} options={{ title: '인터벌 런닝' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;