import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroLogin, setErroLogin] = useState('');

  const fazerLogin = () => {
    if (email === 'matheusmorais78965@gmail.com' && senha === '1234') {
      setErroLogin('');
      navigation.replace('Home');
    } else {
      setErroLogin('E-mail ou senha incorretos. Tente novamente.');
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
          onChangeText={(valor) => {
            setEmail(valor);
            if (erroLogin) setErroLogin('');
          }}
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
          value={senha}
          onChangeText={(valor) => {
            setSenha(valor);
            if (erroLogin) setErroLogin('');
          }}
        />

        {!!erroLogin && <Text style={styles.mensagemErro}>{erroLogin}</Text>}

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
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  logo: {
    width: 180,
    height: 70,
    resizeMode: 'contain',
  },

  // 🔥 aqui está o segredo
  formArea: {
    width: '100%',
    marginTop: 120, // distância melhor para iPhone
    alignItems: 'center',
  },

  input: {
    width: '90%', // 👈 deixa mais bonito igual da imagem
    height: 52,
    backgroundColor: '#e0e0e0',
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  botao: {
    width: '90%', // 👈 alinhado com os inputs
    height: 52,
    backgroundColor: '#5cc6ba',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  mensagemErro: {
    width: '90%',
    color: '#c0392b',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: '600',
  },

  rodape: {
    marginBottom: 20,
    color: '#999',
    textAlign: 'center',
  },
});