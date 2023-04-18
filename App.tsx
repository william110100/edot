import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { AppProvider } from "./src/contexts";
import { Home } from "./src/modules";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppProvider>
        <StatusBar />
        <Home />
      </AppProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
});
