import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { ORS_TOKEN } from '@env';

const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]) // limpa as sugestões se o campo estiver vazio ou com menos de 2 letras
      return;
    }

    const fetchPlaces = async () => {
      try {
        const response = await fetch(`https://api.openrouteservice.org/geocode/autocomplete?text=${query}&api_key=${ORS_TOKEN}&boundary.country=BR`);
        const data = await response.json();
        setSuggestions(data.features || []);
      } catch (error) {
        console.error('Erro ao buscar locais:', error);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchPlaces();
    }, 400); // debounce

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSelect = (place) => {
    console.log('Local selecionado:', place.properties.label);
    // Aqui você pode despachar pro Redux ou navegar, se quiser
  };

  return (
    <SafeAreaView style={tw`android:mt-4 bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image 
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />

        <TextInput
          placeholder="Para onde?"
          value={query}
          onChangeText={setQuery}
          style={tw`bg-gray-200 p-3 rounded-lg text-lg mt-2`}
        />

        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.properties.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelect(item)}
              style={tw`p-2 border-b border-gray-200`}
            >
              <Text style={tw`text-base`}>{item.properties.label}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={tw `flex items-center`}>
          <NavOptions />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
