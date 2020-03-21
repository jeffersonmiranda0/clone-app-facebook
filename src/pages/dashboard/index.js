import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ReadMore from 'react-native-read-more-text';
import {
  faVideo,
  faPhotoVideo,
  faMapMarker,
  faBars,
  faPlus,
  faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function dashboard() {
  const person = {
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/c/c0/Nicolas_Cage_Deauville_2013.jpg',
    name: 'Nicolas Cage',
  };

  const posts = [
    {
      name: 'Keanu Reeves',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/f/f2/Keanu_Reeves_2013_%2810615146086%29_%28cropped%29.jpg',
      imagePost:
        'https://cdn.ome.lt/vzQlSruPR0Ei5y4mCL37r85wHfU=/1200x630/smart/extras/conteudos/keanu_reeves_Christian_Petersen_GETTY_IMAGES_NORTH_AMERICA_AFP_2.jpg',
    },
    {
      name: 'Jair M. Bolsonaro',
      avatar:
        'https://img.r7.com/images/reuters-jair-bolsonaro-11122019102039574?dimensions=460x305&&amp;&amp;resize=460x305&amp;crop=570x378+90+62layout=%27responsive%27',
      imagePost:
        'https://ogimg.infoglobo.com.br/in/24313083-dce-46f/FT1086A/652/xJair-Bolsonaro.jpg.pagespeed.ic.TxKcAUjrAd.jpg',
    },
    {
      name: 'Homer Simpson',
      avatar:
        'https://www.infomoney.com.br/wp-content/uploads/2019/06/homer-simpson.jpg?fit=900%2C734&quality=75&strip=all',
      imagePost: 'https://www.rbsdirect.com.br/imagesrc/25304262.jpg?w=700',
    },
  ];

  useEffect(() => {});

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.content}>
        {/** POST */}
        <View style={style.post}>
          <Image
            style={style.postImage}
            source={{
              uri: person.avatar,
            }}
          />
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

        {/** TABS */}
        <View style={style.tabStory}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 10,
              paddingRight: 20,
            }}>
            <View style={style.tabStorePerson}>
              <View style={style.tabIcon}>
                <FontAwesomeIcon icon={faPlus} size="18" />
              </View>
              <Text style={style.tabStoreText}>Adicionar ao story</Text>
              <Image
                source={{uri: person.avatar}}
                style={{
                  height: 140,
                  width: 100,
                  position: 'absolute',
                  zIndex: -1,
                  borderRadius: 5,
                }}
              />
            </View>
            {posts.map(post => (
              <View style={style.tabStorePerson}>
                <Image style={style.tabIcon} source={{uri: post.avatar}} />
                <Text style={style.tabStoreText}>{post.name}</Text>
                <Image
                  source={{uri: post.imagePost}}
                  style={{
                    height: 140,
                    width: 100,
                    position: 'absolute',
                    zIndex: -1,
                    borderRadius: 5,
                  }}
                />
              </View>
            ))}
          </ScrollView>
        </View>

        {/** POSTS */}
        {posts.map(post => (
          <View style={style.publications}>
            <View style={style.publicationHeader}>
              <Image
                style={style.publicationAvatar}
                source={{uri: post.avatar}}
              />
              <View style={style.publicationName}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                  {post.name}
                </Text>
                <Text style={{fontSize: 12, marginTop: 2, color: '#333333'}}>
                  1 h . <FontAwesomeIcon icon={faGlobeAmericas} size="10" />
                </Text>
              </View>
            </View>
            <View style={style.publicationContent}>
              <ReadMore numberOfLines={4}>
                <Text>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos, e vem sendo utilizado desde o
                  século XVI, quando um impressor desconhecido pegou uma bandeja
                  de tipos e os embaralhou para fazer um livro de modelos de
                  tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como
                  também ao salto para a editoração eletrônica, permanecendo
                  essencialmente inalterado. Se popularizou na década de 60,
                  quando a Letraset lançou decalques contendo passagens de Lorem
                  Ipsum, e mais recentemente quando passou a ser integrado a
                  softwares de editoração eletrônica como Aldus PageMaker.
                </Text>
              </ReadMore>
            </View>
            <Image
              style={style.publicationContentImage}
              source={{uri: post.imagePost}}
            />
            <View style={style.publicationActions}></View>
          </View>
        ))}
      </View>
    </ScrollView>
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

  tabStory: {
    display: 'flex',
    alignItems: 'flex-start',
    height: 160,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  tabStorePerson: {
    borderRadius: 5,
    width: 100,
    backgroundColor: '#d3d3d3',
    textAlign: 'left',
    textAlignVertical: 'bottom',
    marginRight: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  tabIcon: {
    height: 35,
    width: 35,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  tabStoreText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  publications: {
    backgroundColor: '#fff',
    marginTop: 10,
  },

  publicationHeader: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  publicationAvatar: {
    height: 35,
    width: 35,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#3360FF',
    marginRight: 10,
  },
  publicationName: {},
  publicationContent: {
    padding: 14,
  },
  publicationContentImage: {
    width: '100%',
    height: 240,
    backgroundColor: '#dfdfdf',
  },
});
