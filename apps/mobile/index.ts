import { registerRootComponent } from "expo";
import { Platform } from "react-native";
import App from "./src/App";

if (Platform.OS === "web") {
  // remove the meta tag that expo adds to the head
  document.querySelector("meta[name=description]")?.remove();
}

registerRootComponent(App);