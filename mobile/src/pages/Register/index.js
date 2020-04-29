import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Form } from '@unform/mobile';
import { Scope } from '@unform/core';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';


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
                        <TextInput style={styles.input}
                            placeholder="Nome"
                            autoCorrect={false}
                        />
                        <TextInput style={styles.input}
                            placeholder="Sobrenome"
                            autoCorrect={false}
                        />
                        <TextInput style={styles.input}
                            placeholder="Email"
                            autoCorrect={false}
                        />
                        <TextInput style={styles.input}
                            secureTextEntry={true}
                            placeholder="Senha"
                            autoCorrect={false}
                        />
                        <TextInput style={styles.input}
                            keyboardType="number-pad"
                            placeholder="Telefone"
                            autoCorrect={false}
                        />
                        <TextInput style={styles.input}
                            keyboardType="number-pad"
                            placeholder="CPF"
                            autoCorrect={false}
                        />

                        <View>
                            <Text style={styles.subtitle}>Endereço</Text>

                            <View style={styles.formEndereco}>
                                <Scope>
                                    <TextInput style={styles.inputCep}
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
                                </Scope>
                            </View>

                            <View style={styles.formEndereco}>
                                <TextInput style={styles.inputCidade}
                                    editable={false}
                                    placeholder="Cidade"
                                    autoCorrect={false}
                                />
                                <TextInput style={styles.inputUf}
                                    editable={false}
                                    placeholder="UF"
                                    autoCorrect={false}
                                />
                            </View>

                            <TextInput style={styles.inputBairro}
                                editable={false}
                                placeholder="Bairro"
                                autoCorrect={false}
                            />

                            <View style={styles.formEndereco}>
                                <TextInput style={styles.inputComplemento}
                                    placeholder="Complemento"
                                    autoCorrect={false}
                                />
                                <TextInput style={styles.inputNumero}
                                    keyboardType="number-pad"
                                    placeholder="Número"
                                    autoCorrect={false}
                                />
                            </View>

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