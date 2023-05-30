import React from 'react';
import { View, Text, Button } from 'react-native';

const NFTDetailScreen = ({ route, navigation }) => {
  const { nftId } = route.params;

  const handleBuyNow = () => {
    // Logic for buying the NFT
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        NFT {nftId} Details
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>Title: NFT {nftId}</Text>
      <Text style={{ fontSize: 18, marginBottom: 16 }}>Price: 0.1 ETH</Text>
      <Button title="Buy Now" onPress={handleBuyNow} />
    </View>
  );
};

export default NFTDetailScreen;
