import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';

interface CheckoutScreenProps {
  route: {
    params: {
      title: string;
      unit_price: number;
      quantity: number;
    };
  };
}

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ route }) => {
  const { title, unit_price, quantity } = route.params;
  const [checkoutUrl, setCheckoutUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const createPreference = async () => {
    try {
      const response = await axios.post('http://10.47.3.90:3000/plano', {
        title,
        unit_price,
        quantity,
      });
      setCheckoutUrl(response.data.init_point);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    createPreference();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <WebView
      source={{ uri: checkoutUrl }}
      style={{ flex: 1 }}
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CheckoutScreen;
