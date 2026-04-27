
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function ClinicaScreen({ route, navigation }) {
	const { clinica } = route.params;

	// Serviços mockados (pode ser dinâmico depois)
	const servicos = [
		{ nome: 'Consulta Dr. Alberto Souza', preco: 300 },
		{ nome: 'Consulta Dra. Maria Alice', preco: 450 },
		{ nome: 'Exame Mamografia', preco: 620 },
		{ nome: 'Exame Ultrassom', preco: 270 },
	];

	return (
		<ScrollView style={styles.container} contentContainerStyle={{padding: 0}}>
			<View style={styles.imageHeaderArea}>
				<Image
					source={require('../assets/foto-clinica.jpg')}
					style={styles.clinicaImage}
					resizeMode="cover"
				/>
				<TouchableOpacity style={styles.backButtonAbsolute} onPress={() => navigation.goBack()}>
					<Text style={styles.backIconGreen}>←</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cardSobreposta}>
				<Text style={styles.nome}>{clinica.nome}</Text>
				<Text style={styles.info}>{clinica.endereco}</Text>
				<Text style={styles.info}>{clinica.bairro}</Text>
				<Text style={styles.info}>{clinica.telefone}</Text>
			</View>

			<Text style={styles.servicosTitulo}>Serviços</Text>

			<View style={styles.servicosLista}>
				{servicos.map((servico, idx) => (
					<View key={idx} style={styles.servicoItem}>
						<View style={{ flex: 1 }}>
							<Text style={styles.servicoNome}>{servico.nome}</Text>
							<Text style={styles.servicoPreco}>R$ {servico.preco.toFixed(2).replace('.', ',')}</Text>
						</View>
						<TouchableOpacity style={styles.btnAgendar}>
							<Text style={styles.btnAgendarTxt}>Agendar</Text>
						</TouchableOpacity>
					</View>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f4f4f4',
		padding: 0,
	},
	backButton: {
		marginBottom: 16,
		alignSelf: 'flex-start',
		padding: 8,
	},
	backIcon: {
		fontSize: 24,
	},
	imageHeaderArea: {
		position: 'relative',
		width: '100%',
		aspectRatio: 1.7,
		minHeight: 200,
		maxHeight: 260,
		marginBottom: 0,
		marginLeft: 0,
		marginRight: 0,
		alignSelf: 'center',
	},
	clinicaImage: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		width: '100%',
		height: '100%',
		borderRadius: 0,
		alignSelf: 'center',
	},
	cardSobreposta: {
		backgroundColor: '#fff',
		borderRadius: 12,
		marginHorizontal: 6,
		marginTop: 8,
		marginBottom: 20,
		elevation: 2,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 4,
		shadowOffset: { width: 0, height: 2 },
		padding: 16,
		zIndex: 2,
	},
	backButtonAbsolute: {
		position: 'absolute',
		top: 18,
		left: 18,
		padding: 6,
		zIndex: 10,
		elevation: 3,
	},
	backIconGreen: {
		fontSize: 34,
		color: '#1cc4b1',
		fontWeight: 'bold',
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 12,
		marginBottom: 20,
		elevation: 2,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 4,
		shadowOffset: { width: 0, height: 2 },
		overflow: 'hidden',
		marginTop: -18,
	},
	nome: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 4,
		color: '#222',
	},
	info: {
		fontSize: 15,
		color: '#555',
		marginBottom: 2,
	},
	servicosTitulo: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#1cc4b1',
		marginBottom: 10,
		marginLeft: 8,
		marginTop: -8,
		alignSelf: 'flex-start',
	},
	servicosLista: {
		marginBottom: 30,
		marginHorizontal: 6,
	},
	servicoItem: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 14,
		marginBottom: 10,
		elevation: 1,
	},
	servicoNome: {
		fontSize: 15,
		color: '#222',
		marginBottom: 2,
	},
	servicoPreco: {
		fontSize: 14,
		color: '#1cc4b1',
		fontWeight: 'bold',
	},
	btnAgendar: {
		backgroundColor: '#1cc4b1',
		borderRadius: 8,
		paddingVertical: 8,
		paddingHorizontal: 18,
		marginLeft: 10,
	},
	btnAgendarTxt: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 15,
	},
});
