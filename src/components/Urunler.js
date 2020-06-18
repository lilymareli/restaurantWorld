import React, { Component } from 'react';
import {
  StatusBar,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  RefreshControl,
  Alert,
  Keyboard,
  View,
  Image,
  Dimensions
} from 'react-native';
import { Container, H1, Content,Row, Button, Left, Right, Body, Icon,Item,Input, Text,List,ListItem,Thumbnail, Title } from 'native-base';
import Altbar from './inc/footer';
import Menu from './inc/header';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import VoiceTest from './voice';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
export default class urunler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urunler:[],
      tiklanan:'Tumu',
      kategori_id:0,
      searchResult:[],
      refreshing:false,
      showFooter:true,
      sonucYok:'',
      name:'',
      count:0,
      micro:false, //added merve
      sesMetni: [], //added merve
}



/*
    //ekleme

    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);

  }
  
  onSpeechResults(e) {
   console.log("deneme speech");
 this.setState({ sesMetni: e.value });
 c
   this.sor();
}
  sor() {
    let key = 0;
    this.searchResult(this.state.sesMetni[key])
    this.onSpeechEnd()
}

onSpeechStart=  () =>{
 
  Voice.start('tr_TR')
  this.setState({micro:true})
  
}
onSpeechEnd=  () =>{
  Voice.stop();
  this.setState({micro:false})
}



        //Burayı çıkardım şimdilik zaten çalışmıyor

        
  
    Voice.onSpeechResults = this.onSpeechResults.bind(this);

     
  }
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
}

componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    Voice.destroy().then(Voice.removeAllListeners);

}
_keyboardDidShow () {
    this.setState({showFooter: false});
}

_keyboardDidHide () {
    this.setState({showFooter: true});
}   

onSpeechResults(e) {
  this.setState({ sesMetni: e.value });
  this.sor();
}
sor() {
  let key = 0;
  this.searchResult(this.state.sesMetni[key])
}

onSpeechStart=  () =>{
Voice.start('tr_TR');
this.setState({micro:true})

}
onSpeechEnd=  () =>{
Voice.stop();
this.setState({micro:false})
}
*/
  }
  componentDidMount() {
    this.urunler()

  }
  
  async urunler() {
    const params = this.props.route.params;
    try {
        let response = await fetch(`https://panel.istocnavigasyon.com/api/getAllUrunler`, {
            method: 'get',
            dataType: 'json', //added by merve
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });

  /*
  async urunler() {
  const  params= this.props.root.params;
   console.log(params)
    if(params){
      var src = `https://panel.istocnavigasyon.com/api/getUrunlerKategoriId/${params.item.kategori_id}`;
    }else{
      var src = `https://panel.istocnavigasyon.com/api/getAllUrunler`
    }
    try {
        let response = await fetch(src, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        */

        
      if (response.status == '200' || response.status == '201') {
        let responseJson = await response.json();
        console.log('urunler =>' + responseJson)
        this.setState({ urunler: responseJson }) 
     //   this.setState({refreshing: false, urunler: responseJson })
     
    } else {
        Alert.alert(
            '',
            'Urunler Getirilemedi!',
            [
                {
                    text: 'OK', onPress: () => console.log('presed')

                }

            ],
            { cancelable: false },
        );
    }
} catch (error) {
    console.error(error);
}

}
async searchResult(name) {
  this.setState({name:name,sonucYok:''})
  if(this.state.name != ''){
  try {
  
      var url = `https://panel.istocnavigasyon.com/api/getAllUrunlerSearch/${this.state.name}`;
    // ?? link kontrol
   
    this.setState({refreshing:true})
      let response = await fetch(url, {
          method: 'get',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          }
      });

      if (response.status == '200' || response.status == '201') {
          let responseJson = await response.json();
          this.setState({refreshing: false, firmalar: responseJson ,sonucYok:''})
          console.log("firma ara" +responseJson)
          if(!responseJson[0]){
            this.setState({sonucYok:'Aranan Sonuç Bulunamadı.'})
          }
      } else {
        this.setState({refreshing: false, searchResult: '' })
      }
  } catch (error) {
      console.error(error);
  }
}
}
/*
        if (response.status == '200' || response.status == '201') {
            let responseJson = await response.json();
            console.log('urunler =>' + responseJson)
            if(responseJson[0]){
              this.setState({refreshing: false, urunler: responseJson,count:responseJson.length })
            }else{
              this.setState({refreshing: false, urunler: responseJson,count:0 })
            }
        } else {
            Alert.alert(
                '',
                'urunler Getirilemedi!',
                [
                    {
                        text: 'OK', onPress: () => console.log('presed')
  
                    }
  
                ],
                { cancelable: false },
            );
        }
    } catch (error) {
        console.error(error);
    }
  }
*/
  render() {

    return (
          <Container style={{backgroundColor:'#f4f4f4'}} >
      <Menu yer='Ürünler' back/>
       
       <Content  style={{backgroundColor:'#f4f4f4'}}>
        <VoiceTest />
              
        <FlatList
                        numColumns={1}
                        data={this.state.urunler}
                        enableEmptySections={true}
                        keyExtractor={(item, index) => (item + index).toString()}
                        refreshControl={
                          <RefreshControl
                              refreshing={this.state.refreshing}
                              tintColor={'#313131'}
                              title={'Yükleniyor'}
                              titleColor={'#313131'}
                          />
                      }
                      /*
                      ListHeaderComponent={
                        this.state.sonucYok != ''? <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20,padding:20 }} >
                              <Text style={{ fontSize: 16,textAlign:'center' }} >{this.state.sonucYok} </Text>
                          </View> : null
                      }*/
                        renderItem={({ item }) => (

                          <View style={{ flex:1, margin: 5, marginHorizontal:15}}>
                            <TouchableOpacity onPress ={() =>  this.props.navigation.navigate('Firmalar',{item:item})}>
                            <View  style={styles.list}>
                              
                                <View style={{flex:2, paddingRight: 10,}}>
                                    <Text style={{color:'#5D5D5D',fontSize:WIDTH/25}}>{item.name}</Text>
                                </View>
                                <View style={{ margin: 5,  }}>
                                  <Image source={require("./images/next.png")} style={{width: 25, height: 25}} />
                                </View>
                              </View>
                          </TouchableOpacity>
                      </View>

                    )} /> 
              
        </Content>
        {this.state.showFooter == true ? 
       <Altbar arama ="a" />
       : null}
      </Container>
    );
  }
}
const styles = StyleSheet.create({ 
  list:{
    marginTop: 5,
    backgroundColor:'#ffffff',
    borderRadius:10,
    padding:5,
    justifyContent: 'space-between',
    alignItems:'center',
    flexDirection:'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
    rowTitle:{
      alignItems:'center',
      justifyContent:'center',
      height:HEIGHT/14,
      paddingHorizontal:20,
      margin:20,
    
    },
    kategori: {
      width: WIDTH/3.5,
      height: WIDTH/9,
      marginRight:WIDTH/15,
      marginBottom:10,
      marginTop:10,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    kategoriAktif: {
      width: WIDTH/3.5,
      height: WIDTH/9,
      marginRight:WIDTH/15,
      marginBottom:10,
      marginTop:10,
      backgroundColor: '#003ea1',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      shadowColor: "#003ea1",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    kategoriText:{ fontSize: 16, color: '#a5a7b3',textAlign:'center'},
    kategoriAktifText:{ fontSize: 16, color: '#fff',textAlign:'center'},
});
