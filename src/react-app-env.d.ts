/// <reference types="react-scripts" />

declare type UnPromisify<T> = T extends Promise<infer U> ? U : T
