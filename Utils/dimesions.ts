// src/utils/dimensions.ts
import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const isSmallDevice = width < 360;
export const isTablet = width >= 768;
export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
export const isWeb = Platform.OS === "web";
