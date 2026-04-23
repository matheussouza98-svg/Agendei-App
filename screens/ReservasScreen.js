import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

export default function ReservasScreen({ route, navigation }) {
  const clinicaSelecionada = route.params?.clinica?.nome || 'Clínica Médica São Remo';

  const reservas = [
    {
      id: '1',
      titulo: 'Consulta Dr. Alberto Souza',
      clinica: clinicaSelecionada,
      data: '18/02/2021',
      hora: '09:30h',
      valor: 'R$ 350,00',
      endereco: 'Av. Nove de Julho, 854',
      bairro: 'Centro - São Paulo',
      telefone: '(11) 0000-0000',
      mostraAcoes: true,
    },
    {
      id: '2',
      titulo: 'Consulta Dr. Alberto Souza',
      clinica: clinicaSelecionada,
      data: '18/02/2021',
      hora: '09:30h',
      valor: 'R$ 350,00',
      endereco: 'Av. Nove de Julho, 854',
      bairro: 'Centro - São Paulo',
      telefone: '(11) 0000-0000',
      mostraAcoes: false,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Minhas Reservas</Text>
      </View>

      <FlatList
        data={reservas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.tituloConsulta}>{item.titulo}</Text>
            <Text style={styles.nomeClinica}>{item.clinica}</Text>

            <View style={styles.rowInfo}>
              <Image source={require('../assets/calendar2.png')} style={styles.iconImage} resizeMode="contain" />
              <Text style={styles.textoInfo}>{item.data}</Text>
              <Image
                source={require('../assets/clock.png')}
                style={[styles.iconImage, styles.iconClock]}
                resizeMode="contain"
              />
              <Text style={styles.textoInfo}>{item.hora}</Text>
            </View>

            <View style={styles.rowInfo}>
              <Image source={require('../assets/valor.png')} style={styles.iconImage} resizeMode="contain" />
              <Text style={styles.textoInfo}>{item.valor}</Text>
            </View>

            <View style={styles.rowInfoTop}>
              <Image source={require('../assets/pin.png')} style={styles.iconImage} resizeMode="contain" />
              <View>
                <Text style={styles.textoInfo}>{item.endereco}</Text>
                <Text style={styles.textoInfo}>{item.bairro}</Text>
                <Text style={styles.textoInfo}>{item.telefone}</Text>
              </View>
            </View>

            {item.mostraAcoes && (
              <View style={styles.actions}>
                <TouchableOpacity style={styles.btnReagendar} activeOpacity={0.85}>
                  <Text style={styles.btnText}>Reagendar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnExcluir} activeOpacity={0.85}>
                  <Text style={styles.btnText}>Excluir Reserva</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        ListFooterComponent={<View style={{ height: 90 }} />}
      />

      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.tabIconActive}>🏠</Text>
        </TouchableOpacity>
        <Text style={styles.tabIcon}>🔎</Text>
        <Text style={styles.tabIconActive}>📅</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.tabIconActive}>👤</Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingBottom: 14,
  },
  backButton: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 40,
    color: '#5cc6ba',
    marginTop: -4,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 42,
    color: '#5cc6ba',
    fontWeight: '700',
  },
  card: {
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  tituloConsulta: {
    fontSize: 18,
    color: '#6f7d80',
    fontWeight: '700',
  },
  nomeClinica: {
    fontSize: 16,
    color: '#8e8e8e',
    marginTop: 2,
    marginBottom: 8,
  },
  rowInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  rowInfoTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 2,
  },
  iconImage: {
    width: 28,
    height: 28,
    marginRight: 8,
  },
  iconClock: {
    marginLeft: 20,
  },
  textoInfo: {
    fontSize: 14,
    color: '#9a9a9a',
    lineHeight: 24,
  },
  actions: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnReagendar: {
    backgroundColor: '#5cc6ba',
    width: '44%',
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnExcluir: {
    backgroundColor: '#df544d',
    width: '44%',
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 14,
    color: '#fff',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 76,
    borderTopWidth: 1,
    borderTopColor: '#e2e2e2',
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabIcon: {
    fontSize: 31,
    color: '#d0d0d0',
  },
  tabIconActive: {
    fontSize: 31,
    color: '#b0b0b0',
  },
});
