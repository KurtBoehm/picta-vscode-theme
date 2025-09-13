import lightColors from "@primer/primitives/dist/ts/colors/light.ts";
import lightColorblindColors from "@primer/primitives/dist/ts/colors/light_colorblind.ts";
import darkColors from "@primer/primitives/dist/ts/colors/dark.ts";
import darkColorblindColors from "@primer/primitives/dist/ts/colors/dark_colorblind.ts";
import dimmedColors from "@primer/primitives/dist/ts/colors/dark_dimmed.ts";

export type Theme =
  | "light"
  | "light_colorblind"
  | "dark"
  | "dark_colorblind"
  | "dark_dimmed";
export type Colors = typeof lightColors;

export function getColors(theme: Theme): Colors {
  switch (theme) {
    case "light":
      // Temp override until Primitives are updated
      lightColors.success.emphasis = "#1f883d";
      lightColors.btn.primary.bg = lightColors.success.emphasis;
      lightColors.btn.primary.hoverBg = lightColors.scale.green[5];
      lightColors.fg.default = "#1f2328";
      lightColors.fg.muted = "#656d76";
      return lightColors;
    case "light_colorblind":
      return lightColorblindColors;
    case "dark":
      // Temp override until Primitives are updated
      darkColors.fg.default = "#e6edf3";
      darkColors.fg.muted = "#7d8590";
      darkColors.accent.fg = "#2f81f7";
      darkColors.severe.subtle = "rgba(219, 109, 40, 0.1)";
      darkColors.danger.subtle = "rgba(248, 81, 73, 0.1)";
      darkColors.done.subtle = "rgba(163, 113, 247, 0.1)";
      darkColors.sponsors.subtle = "rgba(219, 97, 162, 0.1)";
      return darkColors;
    case "dark_colorblind":
      return darkColorblindColors;
    case "dark_dimmed":
      return dimmedColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

export const pictaColors = {
  red: { medium: "#ce2233", light: "#ff7a80" },
  orange: { medium: "#d76500", light: "#ff9566" },
  yellow: { medium: "#bc8700", light: "#ffc960" },
  olive: { medium: "#7c8200", light: "#c6ce59" },
  green: { medium: "#22893a", light: "#56da70" },
  cyan: { medium: "#00899b", light: "#50d4cf" },
  blue: { medium: "#0052ac", light: "#75bfff" },
  indigo: { medium: "#633ac1", light: "#c1b1ff" },
  purple: { medium: "#ab44c5", light: "#e8a1ff" },
  pink: { medium: "#d33887", light: "#ff9ec5" },
};
