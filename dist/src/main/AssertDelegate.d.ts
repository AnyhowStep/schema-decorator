export declare type AssertDelegate<T> = (name: string, mixed: any) => T;
export declare type TypeOf<AssertDelegateT extends AssertDelegate<any>> = ReturnType<AssertDelegateT>;
