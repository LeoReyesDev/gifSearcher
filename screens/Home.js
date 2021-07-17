//import * as React from 'react';
import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView, TextInput} from 'react-native';
import {
  Card,
  Button,
  Paragraph,
  Searchbar,
  ActivityIndicator,
  Colors,
} from 'react-native-paper';

import LightBoxModal from './LightBox';

//API TOKENS
const TOKEN = 'gdwjphWDU038gRbOZBeOX0oNWQZEdPGM';
const API = `https://api.giphy.com/v1/gifs/search?api_key=${TOKEN}`;

//GET IMAGES LIST
const AppList = props => {
  //Vars for search gif
  const [searchWord, setSearchWord] = useState([]);
  //Vars set list Gifs
  const [myGifs, SetMyGifs] = useState([]);
  //Vars for display loading
  const [displayLoader, setLoader] = useState(false);

  //Save History
  const [arrayHistory, setArrayHistory] = useState([]);
  const saveHistory = () => {
    setArrayHistory(prev => [...prev, searchWord]);
    console.log('HIstoiry', arrayHistory);
  };

  //Get and call API IMAGES
  const searchGif = () => {
    saveHistory();
    fetch(API + '&q=' + searchWord + '&limit=5')
      .then(res => {
        return res.json();
      })
      .then(gifData => {
        console.log('res.data', gifData.data);
        SetMyGifs(gifData.data);
      });
    //callLoader

    showLoader();
  };
  //OPen MOdal
  const [modalVisible, setModalVisible] = useState(false);
  //save Image Modal
  const [modalImg, setModalImg] = useState('');

  const modalLaunchImg = imageModal => {
    console.log('URL IMAGE', imageModal);
    return setModalVisible(true), setModalImg(imageModal);
  };

  const closex = () => {
    setModalVisible(false);
    console.log('CLOSEX', modalVisible);
  };

  const showLoader = () => {
    setLoader(true);
    setTimeout(function () {
      setLoader(false);
      console.log('HIDE LOADER');
    }, 3500);
  };

  const hideLoader = () => {
    console.log('HIDE LOADER');
    //setLoader(false);
  };

  return (
    <View>
      {modalVisible ? (
        <LightBoxModal
          imageUrl={modalImg}
          descript={'your gif is here'}
          setModalVisible={false}
          closeModal={closex}
        />
      ) : null}

      <TextInput
        placeholder="Search your gif here"
        onChangeText={searchWord => setSearchWord(searchWord)}
        value={searchWord.toString()}
        key="searcher"
        icon="camera"
      />
      <Button
        mode="contained"
        style={{backgroundColor: 'green'}}
        onPress={e => {
          e.preventDefault();
          searchGif();
        }}>
        SEARCH
      </Button>
      <Card>
        <Card.Title title="HISTORY SEARCH" subtitle="last searches" />
        <Card.Content>
          {arrayHistory.map(item => {
            return <Paragraph>{item}</Paragraph>;
          })}
        </Card.Content>
      </Card>
      <SafeAreaView>
        <ScrollView>
          {/* MAP DATA SEARCH */}
          {displayLoader ? (
            <ActivityIndicator
              animating={true}
              size={'large'}
              color="#004DCF"
            />
          ) : (
            myGifs.map((gifs, i) => {
              return (
                <Card key={gifs.id}>
                  <Card.Actions>
                    <Card.Cover
                      key={gifs.id}
                      style={{width: '100%'}}
                      source={{uri: `${gifs.images.original.url}`}}
                    />
                  </Card.Actions>
                  <Button
                    key={gifs.id}
                    style={{backgroundColor: '#004DCF'}}
                    mode="contained"
                    onPress={() => modalLaunchImg(gifs.images.original.url)}>
                    View Gif
                  </Button>
                </Card>
              );
            })
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const Home = () => {
  return <AppList />;
};

export default Home;
