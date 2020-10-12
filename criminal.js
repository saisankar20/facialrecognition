
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';


export default class Criminal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {

    RNFetchBlob.fetch('GET','https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {

        this.setState({ data: json.movies, isLoading: false });
      })

      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
    }


  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
        )}
      </View>
    );
  }
};
