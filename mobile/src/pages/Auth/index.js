import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Input from '../../components/Form/Input';
import styles from './styles';
import { Form } from '@unform/mobile';




export default function Auth() {
  const formAuth = useRef(null);

  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate('Register');
  }
  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <View style={styles.container}>
      <View style={styles.LogoView}>
        <Image
          source={require('../../../assets/icon.png')}
          style={styles.logo}
        />
      </View>

      <Form ref={formAuth} onSubmit={handleSubmit}>
        <Input placeholder="E-mail" name="email" type="email" style={styles.input}/>
        <Input placeholder="Senha" name="password" type="password" style={styles.input} secureTextEntry={true} password={true}/>

        <TouchableOpacity style={styles.botao} onPress={() => {formAuth.current.submitForm()}}>
          <Text style={styles.botaoText}> Login </Text>
        </TouchableOpacity>
      </Form>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigateToRegister()}>
        <Text style={styles.botaoText}> Registrar </Text>
      </TouchableOpacity>

    </View>
  );

}

