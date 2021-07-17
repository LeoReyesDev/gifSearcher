import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {Card, Button} from 'react-native-paper';

//LightBoxModal
const LightBoxModal = props => {
  return (
    <View
      style={{
        width: '100%',
        height: 730,
        backgroundColor: '#004DCF',
        justifyContent: 'center',
      }}>
      <Text>{props.descript}</Text>

      <Card>
        <Card.Actions>
          <Card.Cover
            style={{width: '100%'}}
            source={{
              uri: props.imageUrl,
            }}
          />
        </Card.Actions>
        <Button onPress={() => props.closeModal()}>CLOSE X</Button>
      </Card>
    </View>
  );
};

export default LightBoxModal;
