import React from 'react';
import { View, Text, FlatList } from 'react-native';

const UserNFTs = [
  { id: '1', title: 'NFT 1', price: '0.1 ETH' },
  { id: '2', title: 'NFT 2', price: '0.2 ETH' },
  { id: '3', title: 'NFT 3', price: '0.3 ETH' },
  { id: '4', title: 'NFT 4', price: '0.4 ETH' },
];

const UserProfileScreen = () => {
  const renderUserNFTItem = ({ item }) => (
    <View style={{ padding: 16, borderBottomWidth: 1, borderColor: '#ccc' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
      <Text style={{ fontSize: 16, marginTop: 4 }}>{item.price}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        Your NFTs
      </Text>
      <FlatList
        data={UserNFTs}
        renderItem={renderUserNFTItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default UserProfileScreen;
