import "@emotion/react"

type MyTheme = import("./themes").Theme

declare module "@emotion/react" {
  export interface Theme extends MyTheme {}
}
