import Colors from "@/constants/colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof (typeof Colors)["light"]
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }

  const themeColors = Colors[theme];
  if (!themeColors || !(colorName in themeColors)) {
    console.warn(`Color "${colorName}" no encontrado para el tema "${theme}"`);
    return "#000"; // valor por defecto seguro
  }

  return themeColors[colorName];
}
