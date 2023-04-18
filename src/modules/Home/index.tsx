import { FC, useContext } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { Card } from "../components";
import { AppContext } from "../../contexts";
import { globalStyles } from "../../globalStyles";

const Home: FC = () => {
  const { content, setContent } = useContext(AppContext);

  return (
    <View style={{ padding: 8 }}>
      <View style={[{ ...globalStyles.row, ...styles.buttonLayout }]}>
        <Pressable
          onPress={() =>
            setContent(
              content.map((value) => ({
                ...value,
                like: value.like + 1,
              })),
            )
          }
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
              ...globalStyles.likeButton,
              ...globalStyles.middle,
            },
          ]}
        >
          <Text style={{ color: "#ffffff" }}>Like All</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            setContent(content.map((value) => ({ ...value, like: 0 })))
          }
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
              ...globalStyles.regularButton,
              ...globalStyles.middle,
            },
          ]}
        >
          <Text style={{ color: "#818181" }}>Reset All</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            setContent(
              content.map((value) => ({
                ...value,
                like: value.like > 0 ? value.like - 1 : 0,
              })),
            )
          }
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
              ...globalStyles.dislikeButton,
              ...globalStyles.middle,
            },
          ]}
        >
          <Text style={{ color: "#ffffff" }}>Dislike All</Text>
        </Pressable>
      </View>
      <FlatList
        contentContainerStyle={{ gap: 16 }}
        data={content}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card id={item.id} image={item.image} like={item.like} />
        )}
      />
    </View>
  );
};

export default Home;
