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
        <ScrollView>
          <View>
            <Image
              source={{uri: 'ruta de imagen'}}
              //style = 'Se crea el estilo'
              resizeMode='cover'
            />
            <Text>Mi perfil de usuario</Text>
            <Text>Mi aplicacion demo de rect</Text>
            <View>
              <Text>Nombre</Text>
              <TextInput
                value={nombre}
                onChangeText={this.manejarCambioNombre}
                placeholder='Ingresa tu nombre'
                placeholderTextColor={'#999'}
              />
              <Text>Apellido</Text>
              <TextInput
                value={apellido}
                onChangeText={this.manejarCambioApellido}
                placeholder='Ingresa tu apellido'
                placeholderTextColor={'#999'}
              />
              <Text>Email</Text>
              <TextInput
                value={email}
                onChangeText={this.manejarCambioEmail}
                placeholder='Ingresa tu email'
                placeholderTextColor={'#999'}
              />
              <Text>Teléfono</Text>
              <TextInput
                value={telefono}
                onChangeText={this.manejarCambioTelefono}
                placeholder='Ingresa tu teléfono'
                placeholderTextColor={'#999'}
              />
              <Text>Descripción</Text>
              <TextInput
                value={descripcion}
                onChangeText={this.manejarCambioDescripcion}
                placeholder='Ingresa una descripción'
                placeholderTextColor={'#999'}
              />
            <View>
              <Button
                tittle='Guardar perfil'
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
  export default App;