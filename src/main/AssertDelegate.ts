export type AssertDelegate<T> = (name : string, mixed : any) => T;
export type TypeOf<AssertDelegateT extends AssertDelegate<any>> = ReturnType<AssertDelegateT>;
