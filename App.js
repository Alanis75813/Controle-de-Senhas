
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [password, setPassword] = useState('');
  const [passwords, setPasswords] = useState([]);

  const handleAddPassword = () => {
    if (password) {
      setPasswords([...passwords, password]);
      setPassword('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Controle de Senhas</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite uma senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Salvar Senha" onPress={handleAddPassword} />

      <Text style={styles.passwordsHeader}>Senhas Criadas:</Text>
      <FlatList
        data={passwords}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.password}>{item}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#00ced1',
    marginBottom: 10,
   
  },
  passwordsHeader: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  password: {
    fontSize: 16,
    marginBottom: 5,
  },
});
