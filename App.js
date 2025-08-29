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

  guardarPerfil =()=>{
    const { nombre, apellido, email, telefono, descripcion } = this.state;
    //Validar que los campos onligatorios no esten vacios
    // nombre, apellido, email
    if(nombre.trim() || !apellido.trim() || !email.trim()){
      Alert.alert(
        'Campos vacios',
        'Los campos ',
        [{ text: 'OK' }]
      );
      return;

      //Validar el correo
      if(!email.includes('@')){
        Alert.alert(
          'Email invalido',
          'Por favor, ingresa un email válido.'
          [{ text: 'OK' }]
        );
        return;
      };
      this.setState({
        mostrarPerfil: true
      });
    }
    Alert.alert(
      'Perfil guardado',
      'Tu perfil ha sido guardado con éxito.',
      [{ text: 'OK' }]
    );
  }

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
          <View style={styles.formulario}>
            <Image
              source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
              style = {styles.imagen}
              resizeMode='cover'
            />
            <Text style={styles.titulo}>Mi perfil de usuario</Text>
            <Text style={styles.subtitulo}>Mi aplicacion demo de rect</Text>
            <View>
              <Text style={styles.header}>Nombre</Text>
              <TextInput
                value={nombre}
                onChangeText={this.manejarCambioNombre}
                placeholder='Ingresa tu nombre'
                placeholderTextColor={'#999'}
                style={styles.input}
              />
              <Text style={styles.header}>Apellido</Text>
              <TextInput
                value={apellido}
                onChangeText={this.manejarCambioApellido}
                placeholder='Ingresa tu apellido'
                placeholderTextColor={'#999'}
                style={styles.input}
              />
              <Text style={styles.header}>Email</Text>
              <TextInput
                value={email}
                onChangeText={this.manejarCambioEmail}
                placeholder='Ingresa tu email'
                placeholderTextColor={'#999'}
                 style={styles.input}
              />
              <Text style={styles.header}>Teléfono</Text>
              <TextInput
                value={telefono}
                onChangeText={this.manejarCambioTelefono}
                placeholder='Ingresa tu teléfono'
                placeholderTextColor={'#999'}
                 style={styles.input}
              />
              <Text style={styles.header}>Descripción</Text>
              <TextInput
                value={descripcion}
                onChangeText={this.manejarCambioDescripcion}
                placeholder='Ingresa una descripción'
                placeholderTextColor={'#999'}
                 style={styles.input}
              />
            <View>
              <Button
                title='Guardar perfil'
                onPress={this.guardarPerfil} 
                
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
    backgroundColor:'#ffffff',
     },
     header:{
      alignItems: 'center',
      marginBottom: 5,
      padding: 10,
      
     },
     imagen:{
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 5,
      borderWidth: 3,
      borderColor: '#fff',
      marginTop: 35,
      marginLeft: 120,
     },
     input:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#a0f5f8ff',
      },
      titulo:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#333'
      },
    subtitulo:{
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
         textAlign: 'center'
      },
      formulario:{
        paddingHorizontal: 20,
      },

  })

  export default App;