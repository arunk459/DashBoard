/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Image, TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Icon,SearchBar } from 'react-native-elements';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
        <View style={{flex:0.1,backgroundColor:'#7F6D1C',flexDirection:'row'}}>
          <View style={{flex:1,}}>
          <Image style={{width: '100%', height: '100%',resizeMode: 'cover',}} source={{uri: 'http://isitindia.in/images/04.jpg'}} />
          </View>
          <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:16,color:'#FFFFFF',paddingHorizontal:10,fontWeight:'bold'}}>Application Production Path</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Icon
                  name="bell"
                    type="font-awesome"
                  color="#FFFFFF"
                  size={30}
              />
          </View>
        </View>
        <ScrollView style={{flex:1}}>
        <View style={{padding:15,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#FFFFFF',fontSize:18,fontWeight:'bold'}}>Leadership Dashboard</Text>
        </View>
        <View style={{borderWidth:1,borderColor:'#7F6D1C',marginHorizontal:50,flexDirection:'row',flex:3,borderRadius:30,padding:5}}>
            <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'#FFFFFF'}}>On Track</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'#FFFFFF'}}>At Risk</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'#FFFFFF'}}>Delayed</Text>
            </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',paddingTop:30}}>
          <Text style={{color:'#FFFFFF',fontSize:18,fontWeight:'bold',paddingVertical:5}}>ON TRACK</Text>
          <Image style={{width: '70%', height:300,resizeMode: 'center',}} source={{uri: 'http://isitindia.in/images/04.jpg'}} />
        </View>
        <View style={{flexDirection:'row',paddingVertical:0,paddingHorizontal:10}}>
            <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:16,paddingVertical:5}}>On Track</Text>
                <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:36,paddingVertical:5}}>12</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:16,paddingVertical:5}}>At Risk</Text>
            <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:36,paddingVertical:5}}>15</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:16,paddingVertical:5}}>Delayed</Text>
            <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:36,paddingVertical:5}}>19</Text>
            </TouchableOpacity>
        </View>
        <View style={{paddingTop:10}}>
        <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={''}
        containerStyle={{backgroundColor:'black',paddingHorizontal:30,}}
        inputContainerStyle={{borderRadius:30,borderWidth:2,borderColor:'#7F6D1C',borderBottomWidth:2,borderBottomColor:'#7F6D1C'}}
      />
        </View>
        <View style={{flex:4,flexDirection:'row',marginHorizontal:30,paddingTop:15}}>
          <View style={{flex:1,borderWidth:1,borderColor:'#7F6D1C',borderRadius:10,justifyContent:'center',alignItems:'center',marginRight:10,padding:3}}>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14}}>CSRM</Text>
          </View>
          <View style={{flex:1,borderWidth:1,borderColor:'#7F6D1C',borderRadius:10,justifyContent:'center',alignItems:'center',marginRight:10,padding:3}}>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,}}>Name</Text>
          </View>
          <View style={{flex:1,borderWidth:1,borderColor:'#7F6D1C',borderRadius:10,justifyContent:'center',alignItems:'center',marginRight:10,padding:3}}>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,}}>Start Date</Text>
          </View>
          <View style={{flex:1,borderWidth:1,borderColor:'#7F6D1C',borderRadius:10,justifyContent:'center',alignItems:'center',padding:3}}>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14}}>Prod Date</Text>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:0.2,padding:20}}>
          <Image style={{width:60, height:60,resizeMode: 'cover',borderRadius:30}} source={{uri: 'http://isitindia.in/images/04.jpg'}} />
          </View>
          <View style={{flex:0.6,padding:5}}>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Cersai Lanister</Text>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Become Queen</Text>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Start Date: 09/01/19</Text>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Prod Date: 09/01/19</Text>
          </View>
          <View style={{flex:0.3,alignItems:'flex-end',paddingRight:15}}>
              <Text style={{color:'#15A78B',fontWeight:'bold',fontSize:14,padding:5}}>OnTrack</Text>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:0.2,padding:20}}>
          <Image style={{width:60, height:60,resizeMode: 'cover',borderRadius:30}} source={{uri: 'http://isitindia.in/images/04.jpg'}} />
          </View>
          <View style={{flex:0.6,padding:5}}>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Cersai Lanister</Text>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Become Queen</Text>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Start Date: 09/01/19</Text>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Prod Date: 09/01/19</Text>
          </View>
          <View style={{flex:0.3,alignItems:'flex-end',paddingRight:15}}>
              <Text style={{color:'#15A78B',fontWeight:'bold',fontSize:14,padding:5}}>OnTrack</Text>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:0.2,padding:20}}>
          <Image style={{width:60, height:60,resizeMode: 'cover',borderRadius:30}} source={{uri: 'http://isitindia.in/images/04.jpg'}} />
          </View>
          <View style={{flex:0.6,padding:5}}>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Cersai Lanister</Text>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Become Queen</Text>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Start Date: 09/01/19</Text>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Prod Date: 09/01/19</Text>
          </View>
          <View style={{flex:0.3,alignItems:'flex-end',paddingRight:15}}>
              <Text style={{color:'#15A78B',fontWeight:'bold',fontSize:14,padding:5}}>OnTrack</Text>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:0.2,padding:20}}>
          <Image style={{width:60, height:60,resizeMode: 'cover',borderRadius:30}} source={{uri: 'http://isitindia.in/images/04.jpg'}} />
          </View>
          <View style={{flex:0.6,padding:5}}>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Cersai Lanister</Text>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Become Queen</Text>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Start Date: 09/01/19</Text>
          <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14,padding:5}}>Prod Date: 09/01/19</Text>
          </View>
          <View style={{flex:0.3,alignItems:'flex-end',paddingRight:15}}>
              <Text style={{color:'#15A78B',fontWeight:'bold',fontSize:14,padding:5}}>OnTrack</Text>
          </View>
        </View>
        
        
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
