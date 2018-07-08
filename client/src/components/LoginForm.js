import React, { Component } from 'react';
<<<<<<< HEAD
import { ScrollView, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
=======
import { Dimensions, ScrollView, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { loginUser } from '../actions/login';
>>>>>>> a91b8d2d0eea65e4c1b89e7fda972d6afb1e6c9f
import { Card, CardSection, FloatingInput, Button, Spinner } from './common';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',

        }
        this.passwordChange = this.passwordChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        const { dispatch, errorMessage, isAuthenticated } = this.props
    }

    emailChange(text) {
        this.setState({
            email: text,
        },()=> console.log(this.state) )
    }

    passwordChange(text) {

        this.setState({
            password: text
        },()=> console.log(this.state))
    }

    handleLoginClick() {
        // console.log('this is the props on line 26', this.props);
        const email = this.state.email;
        const password = this.state.password;
        const creds = { email: email, password: password };
        this.props.dispatch(loginUser(creds));
    }

    measure(layout) {
      const { width } = layout;
      this.setState({ width: width })
    }

  render() {
    const { dispatch, errorMessage, isAuthenticated } = this.props;

    return (
      <ScrollView>
        <View style={styles.containerStyle}>
          <View style={styles.titleStyle}>
            <Text style={styles.titleText}>Log In</Text>
          </View>
          <View style={styles.cardStyle}>
            <View style={styles.inputSection}>
              <FloatingInput
                label="Email"
                placeholder="email@email.com"
<<<<<<< HEAD
=======
                onChangeText={ text => this.emailChange(text)}
>>>>>>> a91b8d2d0eea65e4c1b89e7fda972d6afb1e6c9f
              />
            </View>

            <View style={styles.inputSection}>
<<<<<<< HEAD
              <FloatingInput
                secureTextEntry
                label="Password"
                placeholder="password"
              />
            </View>
          </View>

          <View style={[styles.buttonSection, {justifyContent: 'center'}]}>
            <Button onPress={ Actions.main }>
            Login
            </Button>
            <View style={styles.signupText}>
              <Text style={styles.text}>First time here?</Text>
                <TouchableWithoutFeedback onPress={ Actions.register }>
                  <View>
                    <Text style={styles.signupLink }>
                      Sign up
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
=======
            <FloatingInput
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={ text => this.passwordChange(text)}
            />
            </View>


          </View>

          <View style={[styles.buttonSection, {justifyContent: 'center'}]}>
            <Button onPress={() => this.handleLoginClick()}>
            Login
            </Button>
            <View style={styles.signupText}>
              <Text style={styles.text}>First time here?
                <TouchableWithoutFeedback onPress={ Actions.register }>
                  <Text style={styles.signupLink }>
                    Sign up
                  </Text>
                </TouchableWithoutFeedback>
              </Text>
>>>>>>> a91b8d2d0eea65e4c1b89e7fda972d6afb1e6c9f
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }
}

const styles ={
  containerStyle: {
    flex: 1,
    paddingVertical: 80,
    justifyContent: 'space-around',
  },
  titleStyle: {
    alignSelf: 'center',
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '800',
    color: 'rgba(40, 40, 40, 1)'
  },
  cardStyle: {
    marginHorizontal: 25,
    marginVertical: 25
  },
  inputSection: {
    padding: 5,
    flexDirection: 'row',
    position: 'relative'
  },
  buttonSection: {
    padding: 5,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  signupText: {
    marginTop: 15,
  },
  text: {

  },
  signupLink: {
    paddingLeft: 5,
    color: 'rgba(63, 81, 181, 0.75)',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;