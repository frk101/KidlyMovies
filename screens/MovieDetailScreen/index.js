import React, { useEffect } from "react";
import { VStack, Text, Spinner, View, ScrollView, useToast } from "native-base";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Alert, StyleSheet, TouchableOpacity, Image,SafeAreaView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { movie } from "../../business/actions/movies";
import { accountFavorite } from "../../business/actions/account";

const MovieDetailScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toast = useToast();
  const media_type = "movie";
  const { movieLoading, movieResult, movieFail } = useSelector(
    (state) => state.movies
  );
  const { authenticationTokenSessionResult } = useSelector(
    (state) => state.authentication
  );
  const { accountDetailResult } = useSelector((state) => state.account);

  useEffect(() => {
    if (params && params.item && params.item.id) _handleGetData();
    return () => {};
  }, [params]);

  useEffect(() => {
    if (movieFail) {
      Alert.alert("UYARI", "İşlem sırasında bir hata oluştu.");
    }
    return () => {};
  }, []);

  const _handleGetData = async () => {
    dispatch(movie(params.item.id));
  };

  const _handleAddFavorite = () => {
    dispatch(
      accountFavorite(
        media_type,
        movieResult.id,
        true,
        authenticationTokenSessionResult.session_id,
        accountDetailResult.id
      )
    ).then(({ payload: { data } }) => {
      if (data && data.success) {
        toast.show({
          placement: "top",
          title: "Başarılı",
          description: "Favoriye ekleme işlemi başarılı",
          status: "success",
        });
      } else {
        toast.show({
          placement: "top",
          title: "Başarısız",
          description: "Favoriye eklenemedi",
          status: "error",
        });
      }
    });
  };

  if (movieLoading) return <Spinner />;

  return (
    <ScrollView>
      <SafeAreaView>

     
    <VStack>
     
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movieResult.poster_path}`,
          }}
          style={styles.image}
        />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonContainer}
        >
          <Ionicons name="arrow-back-outline" size={18} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_handleAddFavorite}
          style={styles.favoriteButtonContainer}
        >
          <MaterialIcons name="favorite" size={18} color="#ffffff" />
        </TouchableOpacity>

        <Text style={styles.name}>{movieResult.original_title}</Text>
        <View style={styles.listContainer}>
          <Text style={styles.baslik}>
            Orjinal Dili:{" "}
            <Text style={styles.title}>{movieResult.original_language}</Text>
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.baslik}>
            Genel Bakış:{" "}
            <Text style={styles.title}>{movieResult.overview}</Text>
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.baslik}>
            Popülerlik:{" "}
            <Text style={styles.title}>{movieResult.popularity}</Text>
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.baslik}>
            Yayın Tarihi:{" "}
            <Text style={styles.title}>{movieResult.release_date}</Text>
          </Text>
        </View>
   
    </VStack>
    </SafeAreaView>
    </ScrollView>
  );
};

MovieDetailScreen.propTypes = {};
const styles = StyleSheet.create({
  image: {
    height: 250,
    width: "100%",
    resizeMode: "contain",
  },

  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0,0,0,0.5)",
    top: 20,
    left: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  name: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  listContainer: {
    padding: 10,
    marginVertical: 10,
    alignItems: "center",

    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    // paddingBottom: 10,
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.19,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  baslik: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  title: { fontSize: 15, fontWeight: "500", textAlign: "center" },
  favoriteButtonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0,0,0,0.5)",
    top: 20,
    right: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});
export default MovieDetailScreen;
