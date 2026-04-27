import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AgendarScreen({ route, navigation }) {
  const { servico } = route.params;
  const [selectedTime, setSelectedTime] = useState(null);

  const horarios = ['09:00', '09:30', '10:00', '10:30'];

  const confirmarReserva = () => {
    if (!selectedTime) {
      alert('Selecione um horário');
      return;
    }

    alert(`Reserva confirmada às ${selectedTime}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.seta}>←</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>Fazer uma reserva</Text>
      </View>

      {/* CONTEÚDO MAIS ABAIXO */}
      <View style={styles.conteudo}>

        <Text style={styles.label}>Horário</Text>

        <View style={styles.horariosArea}>
          {horarios.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.boxHorario,
                selectedTime === item && styles.boxHorarioAtivo
              ]}
              onPress={() => setSelectedTime(item)}
            >
              <Text
                style={[
                  styles.txtHorario,
                  selectedTime === item && styles.txtHorarioAtivo
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* INFO À ESQUERDA */}
        <View style={styles.infoArea}>
          <Text style={styles.nomeServico}>{servico.nome}</Text>

          <Text style={styles.preco}>
            R$ {servico.preco.toFixed(2).replace('.', ',')}
          </Text>
        </View>

      </View>

      <TouchableOpacity
        style={styles.botaoConfirmar}
        onPress={confirmarReserva}
      >
        <Text style={styles.txtConfirmar}>Confirmar reserva</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 20,
    paddingTop: 25,
  },

  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  botaoVoltar: {
    position: 'absolute',
    left: 0,
  },

  seta: {
    fontSize: 32,
    color: '#1cc4b1',
    fontWeight: 'bold',
  },

  titulo: {
    fontSize: 24,
    color: '#1cc4b1',
    fontWeight: 'bold',
  },

  // 🔥 DESCEU MAIS UM POUCO
  conteudo: {
    marginTop: 360,
  },

  label: {
    fontSize: 20,
    color: '#555',
    marginBottom: 18,
  },

  horariosArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  boxHorario: {
    width: '23%',
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxHorarioAtivo: {
    backgroundColor: '#1cc4b1',
    borderColor: '#1cc4b1',
  },

  txtHorario: {
    fontSize: 14,
    color: '#555',
  },

  txtHorarioAtivo: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // 👇 ALINHADO À ESQUERDA
  infoArea: {
    marginTop: 35,
    alignItems: 'flex-start',
  },

  nomeServico: {
    fontSize: 22,
    color: '#666',
    textAlign: 'left',
  },

  preco: {
    fontSize: 30,
    color: '#1cc4b1',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'left',
  },

  botaoConfirmar: {
    position: 'absolute',
    bottom: 35,
    left: 20,
    right: 20,
    height: 58,
    borderRadius: 10,
    backgroundColor: '#1cc4b1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtConfirmar: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});