import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, TextInput, View } from 'react-native';
import { isEmailValid } from '../../constants/utils';
import useLogin from './useLogin';

const LoginScreen = () => {

     const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      
      const {isAuthenticated, isLoading, login} = useLogin()

      const router = useRouter()

      const onLoginPress = () => {
        if(isEmailValid(email) && password.length > 0){
            login(email, password)
        } else {
            Alert.alert("Error", "Fields are required")
        }
        
      }

      useEffect(()=> {
        if(isAuthenticated){
            // SecureStore.setItemAsync("token","dummy")
            router.navigate('/feed/Feed')
        }
      },[isAuthenticated])

     return (
        <View style={{
          flex:1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TextInput 
          style={{
            fontSize: 20,
            color: 'white'
          }}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          />
          <TextInput 
          style={{
            fontSize: 20,
            color: 'white'
          }}
          placeholder='Password'
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          />
          {isLoading && <ActivityIndicator size={'small'}/>}
          <Button 
          title='Login'
          onPress={onLoginPress}
          />
        </View>
      );
}

export default LoginScreen