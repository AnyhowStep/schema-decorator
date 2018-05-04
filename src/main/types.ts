export type Constructor<T> = {new():T};
export type AssertDelegate<T> = (name : string, mixed : any) => T;
export type AssertFunc<T> = Constructor<T>|AssertDelegate<T>;
export type TypeOf<T extends AssertFunc<any>> = T extends AssertFunc<infer R> ? R : any;
