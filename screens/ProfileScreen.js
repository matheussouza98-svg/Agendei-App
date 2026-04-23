import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu Perfil</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.value}>Matheus Morais de Souza</Text>

        <Text style={[styles.label, { marginTop: 20 }]}>E-mail</Text>
        <Text style={styles.value}>matheusmorais78965@gmail.com</Text>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.tabIcon}>🏠</Text>
        </TouchableOpacity>
        <Text style={styles.tabIcon}>🔎</Text>
        <Text style={styles.tabIcon}>📅</Text>
        <Text style={styles.tabIconActive}>👤</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    height: 95,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 14,
  },
  headerTitle: {
    fontSize: 24,
    color: '#5cc6ba',
    fontWeight: '700',
  },
  content: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
    marginBottom: 20,
  },
  tabBar: {
    height: 85,
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  tabIcon: {
    fontSize: 28,
  },
  tabIconActive: {
    fontSize: 28,
  },
});