import { FC, useContext } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { AppContext } from "../../../contexts";
import { globalStyles } from "../../../globalStyles";
import { Feed } from "../../../interfaces";

const Card: FC<Feed> = (props: Feed) => {
  const { id, image, like } = props;
  const { content, setContent } = useContext(AppContext);

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      <View
        style={[
          {
            justifyContent: "space-between",
            paddingHorizontal: 16,
            ...globalStyles.row,
          },
        ]}
      >
        <Text
          style={[{ ...globalStyles.regularButton, ...globalStyles.middle }]}
        >
          {like} likes
        </Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Pressable
            onPress={() =>
              setContent(
                content.map((value) =>
                  value.id === id ? { ...value, like: value.like + 1 } : value,
                ),
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
            <Text style={{ color: "#ffffff" }}>Like</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
                ...globalStyles.dislikeButton,
                ...globalStyles.middle,
              },
            ]}
            onPress={() =>
              setContent(
                content.map((value) =>
                  value.id === id && value.like > 0
                    ? { ...value, like: value.like - 1 }
                    : value,
                ),
              )
            }
          >
            <Text style={{ color: "#ffffff" }}>Dislike</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Card;
