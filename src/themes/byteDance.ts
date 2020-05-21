import { Theme } from "./interface"

const colors: Theme["colors"] = {
  primary: "#1a97c7",
  text: "#3e4c5b",
  textSecondary: "#526579",
}

const variables: Theme["variables"] = {
  fontSizeBase: "1.4rem",
  borderRadiusBase: "2px",
  borderWidthBase: "1px",
}

export const theme: Theme = {
  colors,
  variables,
}
