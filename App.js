import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';

export default function HomeScreen() {
  const [textModalVisible, setTextModalVisible] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);

  const nombre = () => {
    setTextModalVisible(true);
  };

  const imagen = () => {
    setImageModalVisible(true);
  };

  return (
    <ImageBackground
      source={require('./img/imagen2.jpg')} // Ruta de tu imagen de fondo
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>¡Bienvenido a nuestra app!</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={nombre}>
            <Text style={styles.buttonText}>Presentación</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={imagen}>
            <Text style={styles.buttonText}>Mostrar Imagen</Text>
          </TouchableOpacity>
        </View>
        {/* Modal para mostrar texto */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={textModalVisible}
          onRequestClose={() => {
            setTextModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Jilmer Estiben Pedraza Ramos</Text>
              <Text style={styles.modalText}>Ficha: 2627090</Text>
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: '#2196F3' }}
                onPress={() => setTextModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* Modal para mostrar imagen */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={imageModalVisible}
          onRequestClose={() => {
            setImageModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                source={require('./img/imagen1.png')} // Ruta de tu imagen
                style={styles.modalImage}
              />
              <Text style={styles.modalText}>!Gracias por ingresar a nuestra APP¡</Text>
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: '#2196F3' }}
                onPress={() => setImageModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalImage: {
    width: 400,
    height: 200,
    marginBottom: 20,
  },
});
