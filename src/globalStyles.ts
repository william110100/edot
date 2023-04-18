import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  column: {
    flexDirection: "column",
  },
  dislikeButton: {
    backgroundColor: "#e91f64",
    borderRadius: 8,
    paddingVertical: 8,
    width: 80,
  },
  likeButton: {
    backgroundColor: "#1a41ff",
    borderRadius: 8,
    paddingVertical: 8,
    width: 80,
  },
  middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  regularButton: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingVertical: 8,
    width: 80,
  },
  row: {
    flexDirection: "row",
  },
});
