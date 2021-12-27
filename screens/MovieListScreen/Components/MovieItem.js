import React, { useState, useEffect } from "react";
import { Text, Pressable, View, HStack, Icon,useToast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useDispatch,useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { accountFavorite } from "../../../business/actions/account";
const MovieItem = ({ item, session_id }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toast = useToast();

  const { movieLoading, movieResult, movieFail } = useSelector(
    (state) => state.movies
  );
  const { authenticationTokenSessionResult } = useSelector(
    (state) => state.authentication
  );
  const { accountDetailResult } = useSelector((state) => state.account);
  const media_type = "movie";
  const _handleGetMovieDetail = () => {
    navigation.navigate("MovieDetail", { item });
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
    )
    .then(({ payload: { data } }) => {
     
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
  return (
    <HStack
      justifyContent={"space-between"}
      m={1}
      p={2}
      borderBottomColor="#dedede"
      borderBottomWidth={1}
    >
      <Pressable onPress={_handleGetMovieDetail}>
        <View>
          <Text>{item.name}</Text>
        </View>
      </Pressable>
      <Pressable onPress={_handleAddFavorite}>
        <Icon
          as={<MaterialIcons name="favorite" />}
          color={ "gray.300"}
        />
      </Pressable>
    </HStack>
  );
};

export default MovieItem;
