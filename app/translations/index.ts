type DeepStringify<T> = T extends string ? string : { [K in keyof T]: DeepStringify<T[K]> };

export type Translation = DeepStringify<typeof import('./en').default>;

export { default as en } from './en';
export { default as pt } from './pt';
