
import { StatusBar } from 'expo-status-bar';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';
import Firebase from '@react-native-firebase/app';
class App extends Component {
  componentDidMount() {
    Firebase.initializeApp(this);

    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
    
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    
        // process the notification
    
        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    
      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
    
        // process the action
      },
    
      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },
    
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
    
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: false,
    
      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
    PushNotification.popInitialNotification((notification) => {
      console.log('Initial Notification', notification);
    });

    PushNotification.getChannels(function (channel_ids) {
      console.log(channel_ids); // ['channel_id_1']
    });
  }
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'black'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Push Notifications Using Firebase</Text>
      </View>
    )
  }
}
export default App;