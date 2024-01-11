import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import {Link, useNavigation} from '@react-navigation/native';
import InputPasswordIcon from '../../../assets/svg/InputPasswordIcon';
import InputTextIcon from '../../../assets/svg/InputTextIcon';
import {useContext, useState} from 'react';
import {login} from '../../features/auth/auth';
import {UserContext} from '../../features/auth/userContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {updateState} = useContext(UserContext);
  const setEmailAsVerified = () => {
    updateState({
      isEmailVerified: true,
    });
  };
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const navigation = useNavigation();

  const handleLogin = async () => {
    const user = await login(email, password);
    if (user) {
      setEmailAsVerified();
    }
  };
  return (
    <View style={style.app}>
      <View className="pt-12">
        <View style={style.banner}>
          <View style={style.arrow}></View>
        </View>
      </View>

      <View style={style.modalLikeContainer}>
        <View style={style.container}>
          <View style={style.titleTextBox}>
            <Text style={style.titleText}>Login</Text>
          </View>
          <View style={style.fieldContainer}>
            <Text style={style.inputHelpText}>E-Mail Address</Text>
            <View style={style.input}>
              <TextInput
                textContentType="emailAddress"
                autoCapitalize="none"
                style={style.textBox}
                onChangeText={newText => setEmail(newText)}
              />
            </View>
          </View>

          <View style={style.fieldContainer}>
            <Text style={style.inputHelpText}>Password</Text>
            <View style={style.input}>
              <TextInput
                textContentType="password"
                style={style.textBox}
                secureTextEntry={isPasswordSecure}
                onChangeText={newText => setPassword(newText)}
              />
              <TouchableOpacity
                hitSlop={15}
                onPress={() => {
                  isPasswordSecure
                    ? setIsPasswordSecure(false)
                    : setIsPasswordSecure(true);
                }}>
                {!isPasswordSecure ? (
                  <InputPasswordIcon size={28} color={'black'} />
                ) : (
                  <InputTextIcon size={28} color={'black'}></InputTextIcon>
                )}
              </TouchableOpacity>
            </View>
          </View>

          <Link to={{screen: 'ForgotPasswordScreen'}} style={style.link}>
            Forgot Password?
          </Link>

          <Link to={{screen: 'Register'}} style={style.link}>
            Have no MealMonitor account? Go to Registration
          </Link>

          <View style={style.filler}></View>

          <TouchableOpacity style={style.button} onPress={handleLogin}>
            <Text style={style.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const style = StyleSheet.create({
  app: {flex: 1, backgroundColor: '#5CA08E'},
  textDescription: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 50,
  },
  centeredContainer: {
    justifyContent: 'space-between', // Center children vertically
    alignItems: 'center', // Center children horizontally
    marginHorizontal: 25,
    width: '100%',
  },

  banner: {
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingBottom: 24,
  },
  arrow: {
    marginHorizontal: 23,
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalLikeContainer: {
    paddingTop: 10,
    flexGrow: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'space-between',
  },

  fieldContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
    alignSelf: 'stretch',
  },
  container: {
    flexGrow: 1,
    display: 'flex',
    paddingHorizontal: 24,
    paddingBottom: 48,
    paddingTop: 20,
    flexDirection: 'column',
    gap: 16,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    alignSelf: 'stretch',
    borderRadius: 8,
    borderWidth: 2,
    fontSize: 16,
  },
  textBox: {
    flexGrow: 1,
    backgroundColor: 'white',
    height: 44,
    alignSelf: 'stretch',
    fontSize: 16,
  },
  inputHelpText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  titleTextBox: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  link: {
    color: '#5CA08E',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textDecorationLine: 'underline',
  },
  filler: {
    flexGrow: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#5CA08E',
    height: 44,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    color: 'white',
  },
});

export default LoginScreen;
