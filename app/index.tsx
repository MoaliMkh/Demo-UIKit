import { Text, View } from "react-native";
import borderRadius from "./tokens/borderRadius";
import borderWidth from "./tokens/borderWidth";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: borderWidth.small,
        borderRadius: borderRadius.radiusXLarge,
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
