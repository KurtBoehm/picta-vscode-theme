import { promises as fs } from "fs";
import getTheme from "./theme";

const lightTheme = getTheme({
  theme: "light",
  name: "KurBo Light",
  extended: false,
});
const lightThemeEx = getTheme({
  theme: "light",
  name: "KurBo Light Extended",
  extended: true,
});

const darkTheme = getTheme({
  theme: "dark",
  name: "KurBo Dark",
  extended: false,
});
const darkThemeEx = getTheme({
  theme: "dark",
  name: "KurBo Dark Extended",
  extended: true,
});

// Write themes

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile("./themes/light.json", JSON.stringify(lightTheme, null, 2)),
      fs.writeFile(
        "./themes/light-ex.json",
        JSON.stringify(lightThemeEx, null, 2)
      ),
      fs.writeFile("./themes/dark.json", JSON.stringify(darkTheme, null, 2)),
      fs.writeFile(
        "./themes/dark-ex.json",
        JSON.stringify(darkThemeEx, null, 2)
      ),
    ])
  )
  .catch(() => process.exit(1));
