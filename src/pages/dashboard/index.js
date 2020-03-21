import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faVideo,
  faPhotoVideo,
  faMapMarker,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

function dashboard() {
  return (
    <>
      <View style={style.content}>
        {/** POST */}
        <View style={style.post}>
          <Image style={style.postImage}></Image>
          <TextInput style={style.postInput}>
            <Text>No que você está pensando?</Text>
          </TextInput>
        </View>
        {/** ATALHOES DE PUBLICAÇÃO */}
        <View style={style.postShortcut}>
          <View style={style.postShortcutItem}>
            <FontAwesomeIcon
              icon={faVideo}
              size="22"
              style={{color: '#ff2e42'}}
            />
            <Text style={style.postShortcutItemText}>Ao vivo</Text>
          </View>
          <View style={style.postShortcutItem}>
            <FontAwesomeIcon
              icon={faPhotoVideo}
              size="22"
              style={{color: '#00d876'}}
            />
            <Text style={style.postShortcutItemText}>Foto</Text>
          </View>
          <View style={style.postShortcutItem}>
            <FontAwesomeIcon
              icon={faMapMarker}
              size="22"
              style={{color: '#cf1d67'}}
            />
            <Text style={style.postShortcutItemText}>Check-in</Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default dashboard;

const style = StyleSheet.create({
  content: {
    backgroundColor: '#a7adba',
    flex: 1,
  },
  post: {
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  postImage: {
    borderRadius: 50,
    height: 45,
    width: 45,
    backgroundColor: '#dddddd',
  },
  postInput: {
    marginLeft: 10,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#dfdfdf',
    height: 40,
    paddingHorizontal: 20,
    width: '80%',
  },
  postShortcut: {
    paddingTop: 15,
    paddingBottom: 15,
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: '#dfdfdf',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  postShortcutItem: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  postShortcutItemText: {
    color: '#414c50',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
