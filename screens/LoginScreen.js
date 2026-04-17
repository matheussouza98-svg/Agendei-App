import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = () => {
    if (email === 'matheusmorais78965@gmail.com' && senha === '1234') {
      navigation.replace('Home');
    } else {
      alert('Email ou senha inválidos');
    }
  };

  return (
    <View style={styles.container}>

      {/* LOGO */}
      <Image
        source={require('../assets/logo4.png')}
        style={styles.logo}
      />

      {/* CAMPOS */}
      <View style={styles.formArea}>

        <TextInput
          placeholder="E-mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
          <Text style={styles.textoBotao}>Acessar</Text>
        </TouchableOpacity>

      </View>

      {/* empurra o rodapé */}
      <View style={{ flex: 1 }} />

      <Text style={styles.rodape}>
        Não tenho uma conta. Toque para criar uma agora.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
  },

  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
  },

  // 🔥 aqui está o segredo
  formArea: {
    width: '100%',
    marginTop: 180, // distância ideal da logo
    alignItems: 'center',
  },

  input: {
    width: '90%', // 👈 deixa mais bonito igual da imagem
    height: 55,
    backgroundColor: '#e0e0e0',
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  botao: {
    width: '90%', // 👈 alinhado com os inputs
    height: 55,
    backgroundColor: '#5cc6ba',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  rodape: {
    marginBottom: 20,
    color: '#999',
    textAlign: 'center',
  },
});