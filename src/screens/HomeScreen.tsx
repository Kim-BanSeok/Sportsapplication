import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

interface Feature {
  id: string;
  title: string;
  screen: string;
}

const features: Feature[] = [
  { id: '1', title: '운동 시간 체크', screen: 'Timer' },
  { id: '2', title: '런닝 시간 체크', screen: 'Running' },
  { id: '3', title: '헬스 운동 알림', screen: 'HealthAlert' },
  { id: '4', title: '인터벌 런닝', screen: 'IntervalRunning' },
];

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>운동 관리 앱</Text>
      <FlatList
        data={features}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Text style={styles.listText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  listItem: {
    padding: 15,
    backgroundColor: '#4caf50',
    borderRadius: 8,
    marginVertical: 10,
  },
  listText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;