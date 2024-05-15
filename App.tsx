import React, { useState } from 'react';
import { View, Image, StyleSheet, Modal, TouchableOpacity, Text, ScrollView } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const renderImages = () => {
    switch (activeSection) {
      case 'all':
      case 'photos':
        return (
          <>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => setSelectedImage(require('./assets/paisagem.png'))}>
                <Image source={require('./assets/paisagem.png')} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedImage(require('./assets/navio.png'))}>
                <Image source={require('./assets/navio.png')} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedImage(require('./assets/paisagem.png'))}>
                <Image source={require('./assets/paisagem.png')} style={styles.image} />
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => setSelectedImage(require('./assets/paisagem.png'))}>
                <Image source={require('./assets/paisagem.png')} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedImage(require('./assets/navio.png'))}>
                <Image source={require('./assets/navio.png')} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedImage(require('./assets/paisagem.png'))}>
                <Image source={require('./assets/paisagem.png')} style={styles.image} />
              </TouchableOpacity>
            </View>
          </>
        );
      case 'videos':
        return (
          <View>
            {/* No momento, não há vídeos para mostrar */}
            <Text style={styles.subText}>No videos available</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image
          source={require('./assets/fundo.png')}
          style={styles.backgroundImage}
        />
        <View style={styles.overlay} />
      </View>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={require('./assets/perfil.png')}
          style={styles.profileimage}
        />
      </TouchableOpacity>

      <View style={styles.backButton}>
        {/* Inserir a imagem para o botão de voltar */}
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('./assets/back.png')}
            style={{ width: 20, height: 20, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Image
              source={require("./assets/perfil.png")}
              style={styles.modalImage}
            />
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={false}
        visible={selectedImage !== null}
        onRequestClose={() => setSelectedImage(null)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setSelectedImage(null)}>
            {selectedImage && (
              <Image
                source={selectedImage}
                style={styles.modalImage}
              />
            )}
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={styles.textContainer}>
        <View style={styles.column}>
          <Text style={styles.mainText}>1k</Text>
          <Text style={styles.subText}>Followers</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.mainText}>365</Text>
          <Text style={styles.subText}>Following</Text>
        </View>
      </View>

      <Text style={styles.mainText}>@jhonMurf</Text>
      <Text style={styles.subText}>
        {"Gosto de paçoca, de dar grau de moto e\n          buzina na frente do hospital"}
      </Text>
      {/* Botões */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.smallButton, { marginRight: 10, marginLeft: 0 }]}
          onPress={() => setActiveSection('all')}
        >
          <Text style={[styles.smallButtonText, styles.blueText, { textAlign: 'center', color: activeSection === 'all' ? 'black' : 'black' }]}>All</Text>
          {activeSection === 'all' && <View style={styles.bar} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.smallButton, { marginRight: 10, marginLeft: 0 }]}
          onPress={() => setActiveSection('photos')}
        >
          <Text style={[styles.smallButtonText, styles.blueText, { textAlign: 'center', color: activeSection === 'photos' ? 'black' : 'black' }]}>Photos</Text>
          {activeSection === 'photos' && <View style={styles.bar} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.smallButton, { marginRight: 10, marginLeft: 0 }]}
          onPress={() => setActiveSection('videos')}
        >
          <Text style={[styles.smallButtonText, styles.blueText, { textAlign: 'center', color: activeSection === 'videos' ? 'black' : 'black' }]}>Videos</Text>
          {activeSection === 'videos' && <View style={styles.bar} />}
        </TouchableOpacity>
      </View>

      {/* Scroll de imagens e vídeos */}
      <ScrollView style={styles.scrollContainer}>
        {renderImages()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EEFA',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 150,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    backgroundColor: '#E6EEFA',
    padding: 10,
    borderRadius:50
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '50%', // Ajuste para cobrir apenas metade da tela
  },
  overlay: {
    position: 'absolute',
    top: '25%', // Comece a sobreposição do meio da tela
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#E6EEFA',
    borderRadius: 50 // Cor da sobreposição
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 6,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  profileimage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'cover',
    marginBottom: 25, // Aumente conforme necessário
    borderWidth: 5,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10, // Aumente conforme necessário
  },
  video: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10, // Adiciona um espaçamento inferior
  },
  column: {
    alignItems: 'center',
    marginTop: -60
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10, // Adiciona um espaçamento inferior
  },
  button: {
    width: 150,
    height: 40,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginBottom: 10,
    elevation: 5, // Adiciona sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2, // Adiciona um espaçamento inferior
  },
  smallButton: {
    width: 80, // Tamanho menor para os novos botões
    paddingVertical: 8, // Ajuste para o tamanho menor
    borderWidth: 0,
  },
  buttonRow: {
    flexDirection: 'row', // Botões dispostos em linha
    justifyContent: 'center', // Centraliza os botões horizontalmente
    width: '100%',
    marginBottom: 10, // Adiciona um espaçamento inferior
  },
  blueButton: {
    backgroundColor:'#5790DF',
    borderRadius: 30,
  },
  whiteButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderRadius: 30,
    
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  smallButtonText: {
    color: 'black',
  },
  blueText: {
    color: '#000000',
  },
  scrollContainer: {
    width: '100%',
    marginTop: 10, // Espaçamento superior
    paddingHorizontal: 20, // Padding horizontal para evitar margens laterais
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20, // Espaçamento entre as linhas
  },
  bar: {
    height: 3,
    borderRadius:2,
    backgroundColor: 'black',
    marginTop: 5,
    alignSelf: 'center',
    width:15
  },
});
