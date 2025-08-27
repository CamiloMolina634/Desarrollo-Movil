import React,{Component} from 'react';
import {
  View,Text,Image,ScrollView,TextInput,Button, StyleSheet, Alert
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      descripcion: '',
      mostrarPerfil: false,
      mensajeAprobacion: "Perfil creado con exito"
    };
  }

  manejarCambioNombre = (texto) => {
    this.setState({ 
      nombre: texto, 
      mostrarPerfil: false,
      mensajeAprobacion: "Informacion actualizada"

    });
  };

  manejarCambioApellido= (texto) => {
    this.setState({ 
      apellido: texto, 
      mostrarPerfil: false,
      mensajeAprobacion: "Informacion actualizada"

    });
  };
  manejarCambioEmail = (texto) => {
    this.setState({ 
      email: texto, 
      mostrarPerfil: false,
      mensajeAprobacion: "Informacion actualizada"

    });
  };
  manejarCambioTelefono = (texto) => {
    this.setState({ 
      telefono: texto, 
      mostrarPerfil: false,
      mensajeAprobacion: "Informacion actualizada"

    });
  };
  manejarCambioDescripcion = (texto) => {
    this.setState({ 
      descripcion: texto, 
      mostrarPerfil: false,
      mensajeAprobacion: "Informacion actualizada"

    });
  };

    limpiarFormulario = () =>{
      this.setState ({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      descripcion: '',
      mostrarPerfil: false,
      mensajeAprobacion: "Perfil creado con exitoLimpiar campos"
    })
    Alert.alert(
      'Formulario Limpiando',
      'Todos los campos han sido borrados',
      [{ text: 'OK' }]
    );
  };

   render(){
    const { nombre, apellido, email, telefono, descripcion, mostrarPerfil, mensajeAprobacion } = this.state;

    return(
      <>
        <ScrollView style={styles.container}>
          <View>
            <Image
              source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
              style = {styles.imagen}
              resizeMode='cover'
            />
            <Text>Mi perfil de usuario</Text>
            <Text>Mi aplicacion demo de rect</Text>
            <View>
              <Text style={styles.header}>Nombre</Text>
              <TextInput
                value={nombre}
                onChangeText={this.manejarCambioNombre}
                placeholder='Ingresa tu nombre'
                placeholderTextColor={'#999'}
              />
              <Text style={styles.header}>Apellido</Text>
              <TextInput
                value={apellido}
                onChangeText={this.manejarCambioApellido}
                placeholder='Ingresa tu apellido'
                placeholderTextColor={'#999'}
              />
              <Text style={styles.header}>Email</Text>
              <TextInput
                value={email}
                onChangeText={this.manejarCambioEmail}
                placeholder='Ingresa tu email'
                placeholderTextColor={'#999'}
              />
              <Text style={styles.header}>Teléfono</Text>
              <TextInput
                value={telefono}
                onChangeText={this.manejarCambioTelefono}
                placeholder='Ingresa tu teléfono'
                placeholderTextColor={'#999'}
              />
              <Text style={styles.header}>Descripción</Text>
              <TextInput
                value={descripcion}
                onChangeText={this.manejarCambioDescripcion}
                placeholder='Ingresa una descripción'
                placeholderTextColor={'#999'}
              />
            <View>
              <Button
                title='Guardar perfil'
                //onPress={} //hace falta crear el metodo de guardar
              />
              <Button
                title='Limpiar campos'
                onPress={this.limpiarFormulario}
              />
            </View>
            </View>
          </View>
        </ScrollView>
      </>
    )
   }


}; // esta llave cierra la clase

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#f5f5f5',
     },
     header:{
      backgroundColor:'#3f51',
      alignItems: 'center',
      marginBottom: 20,
      padding: 30,
     },
     imagen:{
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 15,
      borderWidth: 3,
      borderColor: '#fff',
     },
  })

  export default App;