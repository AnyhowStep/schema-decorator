export declare type Constructor<T> = {
    new (): T;
};
export declare type AssertDelegate<T> = (name: string, mixed: any) => T;
export declare type AssertFunc<T> = Constructor<T> | AssertDelegate<T>;
export declare type TypeOf<T extends AssertFunc<any>> = T extends AssertFunc<infer R> ? R : any;
