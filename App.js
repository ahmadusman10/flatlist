import {useState} from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image} from 'react-native';
import Data from './generated.json';
export default function App() {
  const [selectedItem,setSelectedItem]=useState(null);

  return (
      <View style={styles.container}>
        {selectedItem && (
          <View style={styles.detailedView}>
            <Image source={{ uri: selectedItem.picture }} style={styles.detailedViewPicture} />
            <Text style={styles.detailedViewName}>{selectedItem.name}</Text>
            <Text style={styles.details}>ID:{selectedItem._id}</Text>
            <Text style={styles.details}>Gender:{selectedItem.gender}</Text>
            <Text style={styles.details}>Age:{selectedItem.age}</Text>
            <Text style={styles.details}>Company: {selectedItem.company}</Text>
            <Text style={styles.details}>Email: {selectedItem.email}</Text>
            <Text style={styles.details}>Phone: {selectedItem.phone}</Text>
            <Text style={styles.details}>Address: {selectedItem.address}</Text>
          </View>
        )}

        <FlatList
          data={Data}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedItem(item)}>
              <View style={styles.itemContainer}>
                <Image source={{ uri: item.picture }} style={styles.picture}/>
                <Text style={styles.name}>{item.name}</Text>
              </View>
            </TouchableOpacity>
      
          )}
         
          />

      </View>
        
  );}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 7,
      backgroundColor: '#E1D9D1',
    },

    itemContainer: {
      flexDirection: 'row',
      padding: 20,
      backgroundColor: '#FAF9F6',
      marginBottom: 12,
      borderRadius: 8,
      alignItems: 'center',
      elevation: 2,
    },

    name: {
      fontSize: 16,
      fontWeight: 'bold',
      flex: 1,
    },

    detailedView: {
      padding: 15,
      backgroundColor: '#FAF9F6',
      marginBottom: 20,
      borderWidth: 3,
      borderRadius: 8,
      elevation: 7,
      borderColor: '#333333',
    },

    detailedViewPicture: {
      width: 100,
      height: 100,
      borderRadius: 3,
      marginBottom: 7,
    },

    detailedViewName: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 7,
    },

    details: {
      fontSize: 15,
      color: '#568',
    },
    
    picture: {
      width: 38,
      height: 38,
      borderRadius: 2,
      marginRight: 10,
    },
    
  });
