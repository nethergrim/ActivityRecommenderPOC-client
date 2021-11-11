declare interface ReducerAction<T = string, P = {}> {
  type: T;
  payload?: P;
}

declare type ReducerDispatch<T = string, P = {}> = (action: ReducerAction<T, P>) => void;

/**
 * @deprecated Do not use set timeout
 */
declare const setTimeout: undefined;

declare interface ArrayRenderer<P> {
  (item: P, index: number, array: Array<P>): JSX.Element | null;
  displayName: string;
}

declare interface ItemRenderer<P, R = JSX.Element | null> {
  (item: P): R;
  displayName: string;
}
