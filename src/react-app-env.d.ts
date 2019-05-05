/// <reference types="react-scripts" />

declare type UnPromisify<T> = T extends Promise<infer U> ? U : T

declare type ReduxStore = {
  dispatch: (any) => void
  getState: () => any
}
