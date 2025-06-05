import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";

const Icon = createIconSetFromIcoMoon(
  require("../../assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);
// 'YourFontName' should match the font name in your IcoMoon config
// 'your-font-file.ttf' should match the font file you copied to assets/fonts

export default Icon;
