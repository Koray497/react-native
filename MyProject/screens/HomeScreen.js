import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const NFTData = [
  { id: '1', title: 'NFT 1', price: '0.1 ETH' },
  { id: '2', title: 'NFT 2', price: '0.2 ETH' },
  { id: '3', title: 'NFT 3', price: '0.3 ETH' },
  // Add more sample NFT data
];

const HomeScreen = ({ navigation }) => {
  const renderNFTItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('NFTDetail', { nftId: item.id })}
      style={{ padding: 16, borderBottomWidth: 1, borderColor: '#ccc' }}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
      <Text style={{ fontSize: 16, marginTop: 4 }}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={NFTData}
        renderItem={renderNFTItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
