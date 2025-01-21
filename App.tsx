import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 타입 정의
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

// 스택 네비게이터 생성
const Stack = createStackNavigator<RootStackParamList>();

// 홈 화면 컴포넌트
const HomeScreen: React.FC = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>메인 화면</Text>
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Details')}>
        자세히 보기
      </Text>
    </SafeAreaView>
  );
};

// 자세히 보기 화면 컴포넌트
const DetailsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>자세히 보기 화면</Text>
    </SafeAreaView>
  );
};

// 앱 컴포넌트
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: '자세히 보기' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: '#1e90ff',
  },
});

export default App;