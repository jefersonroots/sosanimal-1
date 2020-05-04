import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Scope } from '@unform/core';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Form/Input';
import { Form } from '@unform/mobile';

export default function Register() {
    const navigation = useNavigation();

    function navigateToRegister() {
        navigation.navigate('RegisterOng');
    }

    return (

        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Cadastrar Usuário</Text>

                <View>
                    <Form>
                        <Input style={styles.input}
                            placeholder="Nome"
                            autoCorrect={false} />
                        <Input style={styles.input}
                            placeholder="Sobrenome"
                            autoCorrect={false}
                        />
                        <Input style={styles.input}
                            placeholder="Email"
                            autoCorrect={false}
                        />
                        <Input style={styles.input}
                            secureTextEntry={true}
                            placeholder="Senha"
                            autoCorrect={false}
                        />
                        <Input style={styles.input}
                            keyboardType="number-pad"
                            placeholder="Telefone"
                            autoCorrect={false}
                        />
                        <Input style={styles.input}
                            keyboardType="number-pad"
                            placeholder="CPF"
                            autoCorrect={false}
                        />

                        <View>
                            <Text style={styles.subtitle}>Endereço</Text>

                            <Scope>
                                <View style={styles.formEndereco}>

                                    <Input style={styles.inputCep}
                                        keyboardType="number-pad"
                                        placeholder="CEP"
                                        autoCorrect={false}
                                    />
                                    <TouchableOpacity
                                        style={styles.botaoVerificar}
                                        onPress={() => { }}
                                    >
                                        <Text style={styles.botaoText}>Verificar</Text>
                                    </TouchableOpacity>

                                </View>

                                <View style={styles.formEndereco}>
                                    <Input style={styles.inputCidade}
                                        editable={false}
                                        placeholder="Cidade"
                                        autoCorrect={false}
                                    />
                                    <Input style={styles.inputUf}
                                        editable={false}
                                        placeholder="UF"
                                        autoCorrect={false}
                                    />
                                </View>

                                <Input style={styles.inputBairro}
                                    editable={false}
                                    placeholder="Bairro"
                                    autoCorrect={false}
                                />

                                <View style={styles.formEndereco}>
                                    <Input style={styles.inputComplemento}
                                        placeholder="Complemento"
                                        autoCorrect={false}
                                    />
                                    <Input style={styles.inputNumero}
                                        keyboardType="number-pad"
                                        placeholder="Número"
                                        autoCorrect={false}
                                    />
                                </View>
                            </Scope>

                            <TouchableOpacity
                                style={styles.botao}
                                onPress={() => { navigateToRegister() }}
                            >
                                <Text style={styles.botaoText}>Cadastrar</Text>
                            </TouchableOpacity>

                        </View>
                    </Form>
                </View>
            </ScrollView>
        </View>
    );
}