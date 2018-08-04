import { Field, AnyField, AssertDelegate, TypeOf, AcceptsOf } from "./types";
import { RawFieldCollection } from "./field";
export declare type SchemaField<FieldT extends AnyField> = (FieldT extends Field<infer N, any> ? (undefined extends TypeOf<FieldT> ? {
    [k in N]+?: TypeOf<FieldT>;
} : {
    [k in N]: TypeOf<FieldT>;
}) : never);
export declare function schema<F0 extends AnyField>(f0: F0): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField>(f0: F0, f1: F1): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField>(f0: F0, f1: F1, f2: F2): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
}) & (undefined extends TypeOf<F35> ? {
    [k in F35["name"]]+?: TypeOf<F35>;
} : {
    [k in F35["name"]]: TypeOf<F35>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }) & (undefined extends AcceptsOf<F35> ? {
        [k in F35["name"]]+?: AcceptsOf<F35>;
    } : {
        [k in F35["name"]]: AcceptsOf<F35>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
}) & (undefined extends TypeOf<F35> ? {
    [k in F35["name"]]+?: TypeOf<F35>;
} : {
    [k in F35["name"]]: TypeOf<F35>;
}) & (undefined extends TypeOf<F36> ? {
    [k in F36["name"]]+?: TypeOf<F36>;
} : {
    [k in F36["name"]]: TypeOf<F36>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }) & (undefined extends AcceptsOf<F35> ? {
        [k in F35["name"]]+?: AcceptsOf<F35>;
    } : {
        [k in F35["name"]]: AcceptsOf<F35>;
    }) & (undefined extends AcceptsOf<F36> ? {
        [k in F36["name"]]+?: AcceptsOf<F36>;
    } : {
        [k in F36["name"]]: AcceptsOf<F36>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
}) & (undefined extends TypeOf<F35> ? {
    [k in F35["name"]]+?: TypeOf<F35>;
} : {
    [k in F35["name"]]: TypeOf<F35>;
}) & (undefined extends TypeOf<F36> ? {
    [k in F36["name"]]+?: TypeOf<F36>;
} : {
    [k in F36["name"]]: TypeOf<F36>;
}) & (undefined extends TypeOf<F37> ? {
    [k in F37["name"]]+?: TypeOf<F37>;
} : {
    [k in F37["name"]]: TypeOf<F37>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }) & (undefined extends AcceptsOf<F35> ? {
        [k in F35["name"]]+?: AcceptsOf<F35>;
    } : {
        [k in F35["name"]]: AcceptsOf<F35>;
    }) & (undefined extends AcceptsOf<F36> ? {
        [k in F36["name"]]+?: AcceptsOf<F36>;
    } : {
        [k in F36["name"]]: AcceptsOf<F36>;
    }) & (undefined extends AcceptsOf<F37> ? {
        [k in F37["name"]]+?: AcceptsOf<F37>;
    } : {
        [k in F37["name"]]: AcceptsOf<F37>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
}) & (undefined extends TypeOf<F35> ? {
    [k in F35["name"]]+?: TypeOf<F35>;
} : {
    [k in F35["name"]]: TypeOf<F35>;
}) & (undefined extends TypeOf<F36> ? {
    [k in F36["name"]]+?: TypeOf<F36>;
} : {
    [k in F36["name"]]: TypeOf<F36>;
}) & (undefined extends TypeOf<F37> ? {
    [k in F37["name"]]+?: TypeOf<F37>;
} : {
    [k in F37["name"]]: TypeOf<F37>;
}) & (undefined extends TypeOf<F38> ? {
    [k in F38["name"]]+?: TypeOf<F38>;
} : {
    [k in F38["name"]]: TypeOf<F38>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }) & (undefined extends AcceptsOf<F35> ? {
        [k in F35["name"]]+?: AcceptsOf<F35>;
    } : {
        [k in F35["name"]]: AcceptsOf<F35>;
    }) & (undefined extends AcceptsOf<F36> ? {
        [k in F36["name"]]+?: AcceptsOf<F36>;
    } : {
        [k in F36["name"]]: AcceptsOf<F36>;
    }) & (undefined extends AcceptsOf<F37> ? {
        [k in F37["name"]]+?: AcceptsOf<F37>;
    } : {
        [k in F37["name"]]: AcceptsOf<F37>;
    }) & (undefined extends AcceptsOf<F38> ? {
        [k in F38["name"]]+?: AcceptsOf<F38>;
    } : {
        [k in F38["name"]]: AcceptsOf<F38>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
}) & (undefined extends TypeOf<F35> ? {
    [k in F35["name"]]+?: TypeOf<F35>;
} : {
    [k in F35["name"]]: TypeOf<F35>;
}) & (undefined extends TypeOf<F36> ? {
    [k in F36["name"]]+?: TypeOf<F36>;
} : {
    [k in F36["name"]]: TypeOf<F36>;
}) & (undefined extends TypeOf<F37> ? {
    [k in F37["name"]]+?: TypeOf<F37>;
} : {
    [k in F37["name"]]: TypeOf<F37>;
}) & (undefined extends TypeOf<F38> ? {
    [k in F38["name"]]+?: TypeOf<F38>;
} : {
    [k in F38["name"]]: TypeOf<F38>;
}) & (undefined extends TypeOf<F39> ? {
    [k in F39["name"]]+?: TypeOf<F39>;
} : {
    [k in F39["name"]]: TypeOf<F39>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }) & (undefined extends AcceptsOf<F35> ? {
        [k in F35["name"]]+?: AcceptsOf<F35>;
    } : {
        [k in F35["name"]]: AcceptsOf<F35>;
    }) & (undefined extends AcceptsOf<F36> ? {
        [k in F36["name"]]+?: AcceptsOf<F36>;
    } : {
        [k in F36["name"]]: AcceptsOf<F36>;
    }) & (undefined extends AcceptsOf<F37> ? {
        [k in F37["name"]]+?: AcceptsOf<F37>;
    } : {
        [k in F37["name"]]: AcceptsOf<F37>;
    }) & (undefined extends AcceptsOf<F38> ? {
        [k in F38["name"]]+?: AcceptsOf<F38>;
    } : {
        [k in F38["name"]]: AcceptsOf<F38>;
    }) & (undefined extends AcceptsOf<F39> ? {
        [k in F39["name"]]+?: AcceptsOf<F39>;
    } : {
        [k in F39["name"]]: AcceptsOf<F39>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
}) & (undefined extends TypeOf<F35> ? {
    [k in F35["name"]]+?: TypeOf<F35>;
} : {
    [k in F35["name"]]: TypeOf<F35>;
}) & (undefined extends TypeOf<F36> ? {
    [k in F36["name"]]+?: TypeOf<F36>;
} : {
    [k in F36["name"]]: TypeOf<F36>;
}) & (undefined extends TypeOf<F37> ? {
    [k in F37["name"]]+?: TypeOf<F37>;
} : {
    [k in F37["name"]]: TypeOf<F37>;
}) & (undefined extends TypeOf<F38> ? {
    [k in F38["name"]]+?: TypeOf<F38>;
} : {
    [k in F38["name"]]: TypeOf<F38>;
}) & (undefined extends TypeOf<F39> ? {
    [k in F39["name"]]+?: TypeOf<F39>;
} : {
    [k in F39["name"]]: TypeOf<F39>;
}) & (undefined extends TypeOf<F40> ? {
    [k in F40["name"]]+?: TypeOf<F40>;
} : {
    [k in F40["name"]]: TypeOf<F40>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }) & (undefined extends AcceptsOf<F35> ? {
        [k in F35["name"]]+?: AcceptsOf<F35>;
    } : {
        [k in F35["name"]]: AcceptsOf<F35>;
    }) & (undefined extends AcceptsOf<F36> ? {
        [k in F36["name"]]+?: AcceptsOf<F36>;
    } : {
        [k in F36["name"]]: AcceptsOf<F36>;
    }) & (undefined extends AcceptsOf<F37> ? {
        [k in F37["name"]]+?: AcceptsOf<F37>;
    } : {
        [k in F37["name"]]: AcceptsOf<F37>;
    }) & (undefined extends AcceptsOf<F38> ? {
        [k in F38["name"]]+?: AcceptsOf<F38>;
    } : {
        [k in F38["name"]]: AcceptsOf<F38>;
    }) & (undefined extends AcceptsOf<F39> ? {
        [k in F39["name"]]+?: AcceptsOf<F39>;
    } : {
        [k in F39["name"]]: AcceptsOf<F39>;
    }) & (undefined extends AcceptsOf<F40> ? {
        [k in F40["name"]]+?: AcceptsOf<F40>;
    } : {
        [k in F40["name"]]: AcceptsOf<F40>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
}) & (undefined extends TypeOf<F35> ? {
    [k in F35["name"]]+?: TypeOf<F35>;
} : {
    [k in F35["name"]]: TypeOf<F35>;
}) & (undefined extends TypeOf<F36> ? {
    [k in F36["name"]]+?: TypeOf<F36>;
} : {
    [k in F36["name"]]: TypeOf<F36>;
}) & (undefined extends TypeOf<F37> ? {
    [k in F37["name"]]+?: TypeOf<F37>;
} : {
    [k in F37["name"]]: TypeOf<F37>;
}) & (undefined extends TypeOf<F38> ? {
    [k in F38["name"]]+?: TypeOf<F38>;
} : {
    [k in F38["name"]]: TypeOf<F38>;
}) & (undefined extends TypeOf<F39> ? {
    [k in F39["name"]]+?: TypeOf<F39>;
} : {
    [k in F39["name"]]: TypeOf<F39>;
}) & (undefined extends TypeOf<F40> ? {
    [k in F40["name"]]+?: TypeOf<F40>;
} : {
    [k in F40["name"]]: TypeOf<F40>;
}) & (undefined extends TypeOf<F41> ? {
    [k in F41["name"]]+?: TypeOf<F41>;
} : {
    [k in F41["name"]]: TypeOf<F41>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }) & (undefined extends AcceptsOf<F35> ? {
        [k in F35["name"]]+?: AcceptsOf<F35>;
    } : {
        [k in F35["name"]]: AcceptsOf<F35>;
    }) & (undefined extends AcceptsOf<F36> ? {
        [k in F36["name"]]+?: AcceptsOf<F36>;
    } : {
        [k in F36["name"]]: AcceptsOf<F36>;
    }) & (undefined extends AcceptsOf<F37> ? {
        [k in F37["name"]]+?: AcceptsOf<F37>;
    } : {
        [k in F37["name"]]: AcceptsOf<F37>;
    }) & (undefined extends AcceptsOf<F38> ? {
        [k in F38["name"]]+?: AcceptsOf<F38>;
    } : {
        [k in F38["name"]]: AcceptsOf<F38>;
    }) & (undefined extends AcceptsOf<F39> ? {
        [k in F39["name"]]+?: AcceptsOf<F39>;
    } : {
        [k in F39["name"]]: AcceptsOf<F39>;
    }) & (undefined extends AcceptsOf<F40> ? {
        [k in F40["name"]]+?: AcceptsOf<F40>;
    } : {
        [k in F40["name"]]: AcceptsOf<F40>;
    }) & (undefined extends AcceptsOf<F41> ? {
        [k in F41["name"]]+?: AcceptsOf<F41>;
    } : {
        [k in F41["name"]]: AcceptsOf<F41>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
}) & (undefined extends TypeOf<F35> ? {
    [k in F35["name"]]+?: TypeOf<F35>;
} : {
    [k in F35["name"]]: TypeOf<F35>;
}) & (undefined extends TypeOf<F36> ? {
    [k in F36["name"]]+?: TypeOf<F36>;
} : {
    [k in F36["name"]]: TypeOf<F36>;
}) & (undefined extends TypeOf<F37> ? {
    [k in F37["name"]]+?: TypeOf<F37>;
} : {
    [k in F37["name"]]: TypeOf<F37>;
}) & (undefined extends TypeOf<F38> ? {
    [k in F38["name"]]+?: TypeOf<F38>;
} : {
    [k in F38["name"]]: TypeOf<F38>;
}) & (undefined extends TypeOf<F39> ? {
    [k in F39["name"]]+?: TypeOf<F39>;
} : {
    [k in F39["name"]]: TypeOf<F39>;
}) & (undefined extends TypeOf<F40> ? {
    [k in F40["name"]]+?: TypeOf<F40>;
} : {
    [k in F40["name"]]: TypeOf<F40>;
}) & (undefined extends TypeOf<F41> ? {
    [k in F41["name"]]+?: TypeOf<F41>;
} : {
    [k in F41["name"]]: TypeOf<F41>;
}) & (undefined extends TypeOf<F42> ? {
    [k in F42["name"]]+?: TypeOf<F42>;
} : {
    [k in F42["name"]]: TypeOf<F42>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }) & (undefined extends AcceptsOf<F35> ? {
        [k in F35["name"]]+?: AcceptsOf<F35>;
    } : {
        [k in F35["name"]]: AcceptsOf<F35>;
    }) & (undefined extends AcceptsOf<F36> ? {
        [k in F36["name"]]+?: AcceptsOf<F36>;
    } : {
        [k in F36["name"]]: AcceptsOf<F36>;
    }) & (undefined extends AcceptsOf<F37> ? {
        [k in F37["name"]]+?: AcceptsOf<F37>;
    } : {
        [k in F37["name"]]: AcceptsOf<F37>;
    }) & (undefined extends AcceptsOf<F38> ? {
        [k in F38["name"]]+?: AcceptsOf<F38>;
    } : {
        [k in F38["name"]]: AcceptsOf<F38>;
    }) & (undefined extends AcceptsOf<F39> ? {
        [k in F39["name"]]+?: AcceptsOf<F39>;
    } : {
        [k in F39["name"]]: AcceptsOf<F39>;
    }) & (undefined extends AcceptsOf<F40> ? {
        [k in F40["name"]]+?: AcceptsOf<F40>;
    } : {
        [k in F40["name"]]: AcceptsOf<F40>;
    }) & (undefined extends AcceptsOf<F41> ? {
        [k in F41["name"]]+?: AcceptsOf<F41>;
    } : {
        [k in F41["name"]]: AcceptsOf<F41>;
    }) & (undefined extends AcceptsOf<F42> ? {
        [k in F42["name"]]+?: AcceptsOf<F42>;
    } : {
        [k in F42["name"]]: AcceptsOf<F42>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField, F43 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42, f43: F43): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
}) & (undefined extends TypeOf<F35> ? {
    [k in F35["name"]]+?: TypeOf<F35>;
} : {
    [k in F35["name"]]: TypeOf<F35>;
}) & (undefined extends TypeOf<F36> ? {
    [k in F36["name"]]+?: TypeOf<F36>;
} : {
    [k in F36["name"]]: TypeOf<F36>;
}) & (undefined extends TypeOf<F37> ? {
    [k in F37["name"]]+?: TypeOf<F37>;
} : {
    [k in F37["name"]]: TypeOf<F37>;
}) & (undefined extends TypeOf<F38> ? {
    [k in F38["name"]]+?: TypeOf<F38>;
} : {
    [k in F38["name"]]: TypeOf<F38>;
}) & (undefined extends TypeOf<F39> ? {
    [k in F39["name"]]+?: TypeOf<F39>;
} : {
    [k in F39["name"]]: TypeOf<F39>;
}) & (undefined extends TypeOf<F40> ? {
    [k in F40["name"]]+?: TypeOf<F40>;
} : {
    [k in F40["name"]]: TypeOf<F40>;
}) & (undefined extends TypeOf<F41> ? {
    [k in F41["name"]]+?: TypeOf<F41>;
} : {
    [k in F41["name"]]: TypeOf<F41>;
}) & (undefined extends TypeOf<F42> ? {
    [k in F42["name"]]+?: TypeOf<F42>;
} : {
    [k in F42["name"]]: TypeOf<F42>;
}) & (undefined extends TypeOf<F43> ? {
    [k in F43["name"]]+?: TypeOf<F43>;
} : {
    [k in F43["name"]]: TypeOf<F43>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }) & (undefined extends AcceptsOf<F35> ? {
        [k in F35["name"]]+?: AcceptsOf<F35>;
    } : {
        [k in F35["name"]]: AcceptsOf<F35>;
    }) & (undefined extends AcceptsOf<F36> ? {
        [k in F36["name"]]+?: AcceptsOf<F36>;
    } : {
        [k in F36["name"]]: AcceptsOf<F36>;
    }) & (undefined extends AcceptsOf<F37> ? {
        [k in F37["name"]]+?: AcceptsOf<F37>;
    } : {
        [k in F37["name"]]: AcceptsOf<F37>;
    }) & (undefined extends AcceptsOf<F38> ? {
        [k in F38["name"]]+?: AcceptsOf<F38>;
    } : {
        [k in F38["name"]]: AcceptsOf<F38>;
    }) & (undefined extends AcceptsOf<F39> ? {
        [k in F39["name"]]+?: AcceptsOf<F39>;
    } : {
        [k in F39["name"]]: AcceptsOf<F39>;
    }) & (undefined extends AcceptsOf<F40> ? {
        [k in F40["name"]]+?: AcceptsOf<F40>;
    } : {
        [k in F40["name"]]: AcceptsOf<F40>;
    }) & (undefined extends AcceptsOf<F41> ? {
        [k in F41["name"]]+?: AcceptsOf<F41>;
    } : {
        [k in F41["name"]]: AcceptsOf<F41>;
    }) & (undefined extends AcceptsOf<F42> ? {
        [k in F42["name"]]+?: AcceptsOf<F42>;
    } : {
        [k in F42["name"]]: AcceptsOf<F42>;
    }) & (undefined extends AcceptsOf<F43> ? {
        [k in F43["name"]]+?: AcceptsOf<F43>;
    } : {
        [k in F43["name"]]: AcceptsOf<F43>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField, F43 extends AnyField, F44 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42, f43: F43, f44: F44): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
}) & (undefined extends TypeOf<F35> ? {
    [k in F35["name"]]+?: TypeOf<F35>;
} : {
    [k in F35["name"]]: TypeOf<F35>;
}) & (undefined extends TypeOf<F36> ? {
    [k in F36["name"]]+?: TypeOf<F36>;
} : {
    [k in F36["name"]]: TypeOf<F36>;
}) & (undefined extends TypeOf<F37> ? {
    [k in F37["name"]]+?: TypeOf<F37>;
} : {
    [k in F37["name"]]: TypeOf<F37>;
}) & (undefined extends TypeOf<F38> ? {
    [k in F38["name"]]+?: TypeOf<F38>;
} : {
    [k in F38["name"]]: TypeOf<F38>;
}) & (undefined extends TypeOf<F39> ? {
    [k in F39["name"]]+?: TypeOf<F39>;
} : {
    [k in F39["name"]]: TypeOf<F39>;
}) & (undefined extends TypeOf<F40> ? {
    [k in F40["name"]]+?: TypeOf<F40>;
} : {
    [k in F40["name"]]: TypeOf<F40>;
}) & (undefined extends TypeOf<F41> ? {
    [k in F41["name"]]+?: TypeOf<F41>;
} : {
    [k in F41["name"]]: TypeOf<F41>;
}) & (undefined extends TypeOf<F42> ? {
    [k in F42["name"]]+?: TypeOf<F42>;
} : {
    [k in F42["name"]]: TypeOf<F42>;
}) & (undefined extends TypeOf<F43> ? {
    [k in F43["name"]]+?: TypeOf<F43>;
} : {
    [k in F43["name"]]: TypeOf<F43>;
}) & (undefined extends TypeOf<F44> ? {
    [k in F44["name"]]+?: TypeOf<F44>;
} : {
    [k in F44["name"]]: TypeOf<F44>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }) & (undefined extends AcceptsOf<F35> ? {
        [k in F35["name"]]+?: AcceptsOf<F35>;
    } : {
        [k in F35["name"]]: AcceptsOf<F35>;
    }) & (undefined extends AcceptsOf<F36> ? {
        [k in F36["name"]]+?: AcceptsOf<F36>;
    } : {
        [k in F36["name"]]: AcceptsOf<F36>;
    }) & (undefined extends AcceptsOf<F37> ? {
        [k in F37["name"]]+?: AcceptsOf<F37>;
    } : {
        [k in F37["name"]]: AcceptsOf<F37>;
    }) & (undefined extends AcceptsOf<F38> ? {
        [k in F38["name"]]+?: AcceptsOf<F38>;
    } : {
        [k in F38["name"]]: AcceptsOf<F38>;
    }) & (undefined extends AcceptsOf<F39> ? {
        [k in F39["name"]]+?: AcceptsOf<F39>;
    } : {
        [k in F39["name"]]: AcceptsOf<F39>;
    }) & (undefined extends AcceptsOf<F40> ? {
        [k in F40["name"]]+?: AcceptsOf<F40>;
    } : {
        [k in F40["name"]]: AcceptsOf<F40>;
    }) & (undefined extends AcceptsOf<F41> ? {
        [k in F41["name"]]+?: AcceptsOf<F41>;
    } : {
        [k in F41["name"]]: AcceptsOf<F41>;
    }) & (undefined extends AcceptsOf<F42> ? {
        [k in F42["name"]]+?: AcceptsOf<F42>;
    } : {
        [k in F42["name"]]: AcceptsOf<F42>;
    }) & (undefined extends AcceptsOf<F43> ? {
        [k in F43["name"]]+?: AcceptsOf<F43>;
    } : {
        [k in F43["name"]]: AcceptsOf<F43>;
    }) & (undefined extends AcceptsOf<F44> ? {
        [k in F44["name"]]+?: AcceptsOf<F44>;
    } : {
        [k in F44["name"]]: AcceptsOf<F44>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField, F43 extends AnyField, F44 extends AnyField, F45 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42, f43: F43, f44: F44, f45: F45): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
}) & (undefined extends TypeOf<F35> ? {
    [k in F35["name"]]+?: TypeOf<F35>;
} : {
    [k in F35["name"]]: TypeOf<F35>;
}) & (undefined extends TypeOf<F36> ? {
    [k in F36["name"]]+?: TypeOf<F36>;
} : {
    [k in F36["name"]]: TypeOf<F36>;
}) & (undefined extends TypeOf<F37> ? {
    [k in F37["name"]]+?: TypeOf<F37>;
} : {
    [k in F37["name"]]: TypeOf<F37>;
}) & (undefined extends TypeOf<F38> ? {
    [k in F38["name"]]+?: TypeOf<F38>;
} : {
    [k in F38["name"]]: TypeOf<F38>;
}) & (undefined extends TypeOf<F39> ? {
    [k in F39["name"]]+?: TypeOf<F39>;
} : {
    [k in F39["name"]]: TypeOf<F39>;
}) & (undefined extends TypeOf<F40> ? {
    [k in F40["name"]]+?: TypeOf<F40>;
} : {
    [k in F40["name"]]: TypeOf<F40>;
}) & (undefined extends TypeOf<F41> ? {
    [k in F41["name"]]+?: TypeOf<F41>;
} : {
    [k in F41["name"]]: TypeOf<F41>;
}) & (undefined extends TypeOf<F42> ? {
    [k in F42["name"]]+?: TypeOf<F42>;
} : {
    [k in F42["name"]]: TypeOf<F42>;
}) & (undefined extends TypeOf<F43> ? {
    [k in F43["name"]]+?: TypeOf<F43>;
} : {
    [k in F43["name"]]: TypeOf<F43>;
}) & (undefined extends TypeOf<F44> ? {
    [k in F44["name"]]+?: TypeOf<F44>;
} : {
    [k in F44["name"]]: TypeOf<F44>;
}) & (undefined extends TypeOf<F45> ? {
    [k in F45["name"]]+?: TypeOf<F45>;
} : {
    [k in F45["name"]]: TypeOf<F45>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }) & (undefined extends AcceptsOf<F35> ? {
        [k in F35["name"]]+?: AcceptsOf<F35>;
    } : {
        [k in F35["name"]]: AcceptsOf<F35>;
    }) & (undefined extends AcceptsOf<F36> ? {
        [k in F36["name"]]+?: AcceptsOf<F36>;
    } : {
        [k in F36["name"]]: AcceptsOf<F36>;
    }) & (undefined extends AcceptsOf<F37> ? {
        [k in F37["name"]]+?: AcceptsOf<F37>;
    } : {
        [k in F37["name"]]: AcceptsOf<F37>;
    }) & (undefined extends AcceptsOf<F38> ? {
        [k in F38["name"]]+?: AcceptsOf<F38>;
    } : {
        [k in F38["name"]]: AcceptsOf<F38>;
    }) & (undefined extends AcceptsOf<F39> ? {
        [k in F39["name"]]+?: AcceptsOf<F39>;
    } : {
        [k in F39["name"]]: AcceptsOf<F39>;
    }) & (undefined extends AcceptsOf<F40> ? {
        [k in F40["name"]]+?: AcceptsOf<F40>;
    } : {
        [k in F40["name"]]: AcceptsOf<F40>;
    }) & (undefined extends AcceptsOf<F41> ? {
        [k in F41["name"]]+?: AcceptsOf<F41>;
    } : {
        [k in F41["name"]]: AcceptsOf<F41>;
    }) & (undefined extends AcceptsOf<F42> ? {
        [k in F42["name"]]+?: AcceptsOf<F42>;
    } : {
        [k in F42["name"]]: AcceptsOf<F42>;
    }) & (undefined extends AcceptsOf<F43> ? {
        [k in F43["name"]]+?: AcceptsOf<F43>;
    } : {
        [k in F43["name"]]: AcceptsOf<F43>;
    }) & (undefined extends AcceptsOf<F44> ? {
        [k in F44["name"]]+?: AcceptsOf<F44>;
    } : {
        [k in F44["name"]]: AcceptsOf<F44>;
    }) & (undefined extends AcceptsOf<F45> ? {
        [k in F45["name"]]+?: AcceptsOf<F45>;
    } : {
        [k in F45["name"]]: AcceptsOf<F45>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField, F43 extends AnyField, F44 extends AnyField, F45 extends AnyField, F46 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42, f43: F43, f44: F44, f45: F45, f46: F46): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
}) & (undefined extends TypeOf<F35> ? {
    [k in F35["name"]]+?: TypeOf<F35>;
} : {
    [k in F35["name"]]: TypeOf<F35>;
}) & (undefined extends TypeOf<F36> ? {
    [k in F36["name"]]+?: TypeOf<F36>;
} : {
    [k in F36["name"]]: TypeOf<F36>;
}) & (undefined extends TypeOf<F37> ? {
    [k in F37["name"]]+?: TypeOf<F37>;
} : {
    [k in F37["name"]]: TypeOf<F37>;
}) & (undefined extends TypeOf<F38> ? {
    [k in F38["name"]]+?: TypeOf<F38>;
} : {
    [k in F38["name"]]: TypeOf<F38>;
}) & (undefined extends TypeOf<F39> ? {
    [k in F39["name"]]+?: TypeOf<F39>;
} : {
    [k in F39["name"]]: TypeOf<F39>;
}) & (undefined extends TypeOf<F40> ? {
    [k in F40["name"]]+?: TypeOf<F40>;
} : {
    [k in F40["name"]]: TypeOf<F40>;
}) & (undefined extends TypeOf<F41> ? {
    [k in F41["name"]]+?: TypeOf<F41>;
} : {
    [k in F41["name"]]: TypeOf<F41>;
}) & (undefined extends TypeOf<F42> ? {
    [k in F42["name"]]+?: TypeOf<F42>;
} : {
    [k in F42["name"]]: TypeOf<F42>;
}) & (undefined extends TypeOf<F43> ? {
    [k in F43["name"]]+?: TypeOf<F43>;
} : {
    [k in F43["name"]]: TypeOf<F43>;
}) & (undefined extends TypeOf<F44> ? {
    [k in F44["name"]]+?: TypeOf<F44>;
} : {
    [k in F44["name"]]: TypeOf<F44>;
}) & (undefined extends TypeOf<F45> ? {
    [k in F45["name"]]+?: TypeOf<F45>;
} : {
    [k in F45["name"]]: TypeOf<F45>;
}) & (undefined extends TypeOf<F46> ? {
    [k in F46["name"]]+?: TypeOf<F46>;
} : {
    [k in F46["name"]]: TypeOf<F46>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }) & (undefined extends AcceptsOf<F35> ? {
        [k in F35["name"]]+?: AcceptsOf<F35>;
    } : {
        [k in F35["name"]]: AcceptsOf<F35>;
    }) & (undefined extends AcceptsOf<F36> ? {
        [k in F36["name"]]+?: AcceptsOf<F36>;
    } : {
        [k in F36["name"]]: AcceptsOf<F36>;
    }) & (undefined extends AcceptsOf<F37> ? {
        [k in F37["name"]]+?: AcceptsOf<F37>;
    } : {
        [k in F37["name"]]: AcceptsOf<F37>;
    }) & (undefined extends AcceptsOf<F38> ? {
        [k in F38["name"]]+?: AcceptsOf<F38>;
    } : {
        [k in F38["name"]]: AcceptsOf<F38>;
    }) & (undefined extends AcceptsOf<F39> ? {
        [k in F39["name"]]+?: AcceptsOf<F39>;
    } : {
        [k in F39["name"]]: AcceptsOf<F39>;
    }) & (undefined extends AcceptsOf<F40> ? {
        [k in F40["name"]]+?: AcceptsOf<F40>;
    } : {
        [k in F40["name"]]: AcceptsOf<F40>;
    }) & (undefined extends AcceptsOf<F41> ? {
        [k in F41["name"]]+?: AcceptsOf<F41>;
    } : {
        [k in F41["name"]]: AcceptsOf<F41>;
    }) & (undefined extends AcceptsOf<F42> ? {
        [k in F42["name"]]+?: AcceptsOf<F42>;
    } : {
        [k in F42["name"]]: AcceptsOf<F42>;
    }) & (undefined extends AcceptsOf<F43> ? {
        [k in F43["name"]]+?: AcceptsOf<F43>;
    } : {
        [k in F43["name"]]: AcceptsOf<F43>;
    }) & (undefined extends AcceptsOf<F44> ? {
        [k in F44["name"]]+?: AcceptsOf<F44>;
    } : {
        [k in F44["name"]]: AcceptsOf<F44>;
    }) & (undefined extends AcceptsOf<F45> ? {
        [k in F45["name"]]+?: AcceptsOf<F45>;
    } : {
        [k in F45["name"]]: AcceptsOf<F45>;
    }) & (undefined extends AcceptsOf<F46> ? {
        [k in F46["name"]]+?: AcceptsOf<F46>;
    } : {
        [k in F46["name"]]: AcceptsOf<F46>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField, F43 extends AnyField, F44 extends AnyField, F45 extends AnyField, F46 extends AnyField, F47 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42, f43: F43, f44: F44, f45: F45, f46: F46, f47: F47): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
}) & (undefined extends TypeOf<F35> ? {
    [k in F35["name"]]+?: TypeOf<F35>;
} : {
    [k in F35["name"]]: TypeOf<F35>;
}) & (undefined extends TypeOf<F36> ? {
    [k in F36["name"]]+?: TypeOf<F36>;
} : {
    [k in F36["name"]]: TypeOf<F36>;
}) & (undefined extends TypeOf<F37> ? {
    [k in F37["name"]]+?: TypeOf<F37>;
} : {
    [k in F37["name"]]: TypeOf<F37>;
}) & (undefined extends TypeOf<F38> ? {
    [k in F38["name"]]+?: TypeOf<F38>;
} : {
    [k in F38["name"]]: TypeOf<F38>;
}) & (undefined extends TypeOf<F39> ? {
    [k in F39["name"]]+?: TypeOf<F39>;
} : {
    [k in F39["name"]]: TypeOf<F39>;
}) & (undefined extends TypeOf<F40> ? {
    [k in F40["name"]]+?: TypeOf<F40>;
} : {
    [k in F40["name"]]: TypeOf<F40>;
}) & (undefined extends TypeOf<F41> ? {
    [k in F41["name"]]+?: TypeOf<F41>;
} : {
    [k in F41["name"]]: TypeOf<F41>;
}) & (undefined extends TypeOf<F42> ? {
    [k in F42["name"]]+?: TypeOf<F42>;
} : {
    [k in F42["name"]]: TypeOf<F42>;
}) & (undefined extends TypeOf<F43> ? {
    [k in F43["name"]]+?: TypeOf<F43>;
} : {
    [k in F43["name"]]: TypeOf<F43>;
}) & (undefined extends TypeOf<F44> ? {
    [k in F44["name"]]+?: TypeOf<F44>;
} : {
    [k in F44["name"]]: TypeOf<F44>;
}) & (undefined extends TypeOf<F45> ? {
    [k in F45["name"]]+?: TypeOf<F45>;
} : {
    [k in F45["name"]]: TypeOf<F45>;
}) & (undefined extends TypeOf<F46> ? {
    [k in F46["name"]]+?: TypeOf<F46>;
} : {
    [k in F46["name"]]: TypeOf<F46>;
}) & (undefined extends TypeOf<F47> ? {
    [k in F47["name"]]+?: TypeOf<F47>;
} : {
    [k in F47["name"]]: TypeOf<F47>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }) & (undefined extends AcceptsOf<F35> ? {
        [k in F35["name"]]+?: AcceptsOf<F35>;
    } : {
        [k in F35["name"]]: AcceptsOf<F35>;
    }) & (undefined extends AcceptsOf<F36> ? {
        [k in F36["name"]]+?: AcceptsOf<F36>;
    } : {
        [k in F36["name"]]: AcceptsOf<F36>;
    }) & (undefined extends AcceptsOf<F37> ? {
        [k in F37["name"]]+?: AcceptsOf<F37>;
    } : {
        [k in F37["name"]]: AcceptsOf<F37>;
    }) & (undefined extends AcceptsOf<F38> ? {
        [k in F38["name"]]+?: AcceptsOf<F38>;
    } : {
        [k in F38["name"]]: AcceptsOf<F38>;
    }) & (undefined extends AcceptsOf<F39> ? {
        [k in F39["name"]]+?: AcceptsOf<F39>;
    } : {
        [k in F39["name"]]: AcceptsOf<F39>;
    }) & (undefined extends AcceptsOf<F40> ? {
        [k in F40["name"]]+?: AcceptsOf<F40>;
    } : {
        [k in F40["name"]]: AcceptsOf<F40>;
    }) & (undefined extends AcceptsOf<F41> ? {
        [k in F41["name"]]+?: AcceptsOf<F41>;
    } : {
        [k in F41["name"]]: AcceptsOf<F41>;
    }) & (undefined extends AcceptsOf<F42> ? {
        [k in F42["name"]]+?: AcceptsOf<F42>;
    } : {
        [k in F42["name"]]: AcceptsOf<F42>;
    }) & (undefined extends AcceptsOf<F43> ? {
        [k in F43["name"]]+?: AcceptsOf<F43>;
    } : {
        [k in F43["name"]]: AcceptsOf<F43>;
    }) & (undefined extends AcceptsOf<F44> ? {
        [k in F44["name"]]+?: AcceptsOf<F44>;
    } : {
        [k in F44["name"]]: AcceptsOf<F44>;
    }) & (undefined extends AcceptsOf<F45> ? {
        [k in F45["name"]]+?: AcceptsOf<F45>;
    } : {
        [k in F45["name"]]: AcceptsOf<F45>;
    }) & (undefined extends AcceptsOf<F46> ? {
        [k in F46["name"]]+?: AcceptsOf<F46>;
    } : {
        [k in F46["name"]]: AcceptsOf<F46>;
    }) & (undefined extends AcceptsOf<F47> ? {
        [k in F47["name"]]+?: AcceptsOf<F47>;
    } : {
        [k in F47["name"]]: AcceptsOf<F47>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField, F43 extends AnyField, F44 extends AnyField, F45 extends AnyField, F46 extends AnyField, F47 extends AnyField, F48 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42, f43: F43, f44: F44, f45: F45, f46: F46, f47: F47, f48: F48): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
}) & (undefined extends TypeOf<F35> ? {
    [k in F35["name"]]+?: TypeOf<F35>;
} : {
    [k in F35["name"]]: TypeOf<F35>;
}) & (undefined extends TypeOf<F36> ? {
    [k in F36["name"]]+?: TypeOf<F36>;
} : {
    [k in F36["name"]]: TypeOf<F36>;
}) & (undefined extends TypeOf<F37> ? {
    [k in F37["name"]]+?: TypeOf<F37>;
} : {
    [k in F37["name"]]: TypeOf<F37>;
}) & (undefined extends TypeOf<F38> ? {
    [k in F38["name"]]+?: TypeOf<F38>;
} : {
    [k in F38["name"]]: TypeOf<F38>;
}) & (undefined extends TypeOf<F39> ? {
    [k in F39["name"]]+?: TypeOf<F39>;
} : {
    [k in F39["name"]]: TypeOf<F39>;
}) & (undefined extends TypeOf<F40> ? {
    [k in F40["name"]]+?: TypeOf<F40>;
} : {
    [k in F40["name"]]: TypeOf<F40>;
}) & (undefined extends TypeOf<F41> ? {
    [k in F41["name"]]+?: TypeOf<F41>;
} : {
    [k in F41["name"]]: TypeOf<F41>;
}) & (undefined extends TypeOf<F42> ? {
    [k in F42["name"]]+?: TypeOf<F42>;
} : {
    [k in F42["name"]]: TypeOf<F42>;
}) & (undefined extends TypeOf<F43> ? {
    [k in F43["name"]]+?: TypeOf<F43>;
} : {
    [k in F43["name"]]: TypeOf<F43>;
}) & (undefined extends TypeOf<F44> ? {
    [k in F44["name"]]+?: TypeOf<F44>;
} : {
    [k in F44["name"]]: TypeOf<F44>;
}) & (undefined extends TypeOf<F45> ? {
    [k in F45["name"]]+?: TypeOf<F45>;
} : {
    [k in F45["name"]]: TypeOf<F45>;
}) & (undefined extends TypeOf<F46> ? {
    [k in F46["name"]]+?: TypeOf<F46>;
} : {
    [k in F46["name"]]: TypeOf<F46>;
}) & (undefined extends TypeOf<F47> ? {
    [k in F47["name"]]+?: TypeOf<F47>;
} : {
    [k in F47["name"]]: TypeOf<F47>;
}) & (undefined extends TypeOf<F48> ? {
    [k in F48["name"]]+?: TypeOf<F48>;
} : {
    [k in F48["name"]]: TypeOf<F48>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }) & (undefined extends AcceptsOf<F35> ? {
        [k in F35["name"]]+?: AcceptsOf<F35>;
    } : {
        [k in F35["name"]]: AcceptsOf<F35>;
    }) & (undefined extends AcceptsOf<F36> ? {
        [k in F36["name"]]+?: AcceptsOf<F36>;
    } : {
        [k in F36["name"]]: AcceptsOf<F36>;
    }) & (undefined extends AcceptsOf<F37> ? {
        [k in F37["name"]]+?: AcceptsOf<F37>;
    } : {
        [k in F37["name"]]: AcceptsOf<F37>;
    }) & (undefined extends AcceptsOf<F38> ? {
        [k in F38["name"]]+?: AcceptsOf<F38>;
    } : {
        [k in F38["name"]]: AcceptsOf<F38>;
    }) & (undefined extends AcceptsOf<F39> ? {
        [k in F39["name"]]+?: AcceptsOf<F39>;
    } : {
        [k in F39["name"]]: AcceptsOf<F39>;
    }) & (undefined extends AcceptsOf<F40> ? {
        [k in F40["name"]]+?: AcceptsOf<F40>;
    } : {
        [k in F40["name"]]: AcceptsOf<F40>;
    }) & (undefined extends AcceptsOf<F41> ? {
        [k in F41["name"]]+?: AcceptsOf<F41>;
    } : {
        [k in F41["name"]]: AcceptsOf<F41>;
    }) & (undefined extends AcceptsOf<F42> ? {
        [k in F42["name"]]+?: AcceptsOf<F42>;
    } : {
        [k in F42["name"]]: AcceptsOf<F42>;
    }) & (undefined extends AcceptsOf<F43> ? {
        [k in F43["name"]]+?: AcceptsOf<F43>;
    } : {
        [k in F43["name"]]: AcceptsOf<F43>;
    }) & (undefined extends AcceptsOf<F44> ? {
        [k in F44["name"]]+?: AcceptsOf<F44>;
    } : {
        [k in F44["name"]]: AcceptsOf<F44>;
    }) & (undefined extends AcceptsOf<F45> ? {
        [k in F45["name"]]+?: AcceptsOf<F45>;
    } : {
        [k in F45["name"]]: AcceptsOf<F45>;
    }) & (undefined extends AcceptsOf<F46> ? {
        [k in F46["name"]]+?: AcceptsOf<F46>;
    } : {
        [k in F46["name"]]: AcceptsOf<F46>;
    }) & (undefined extends AcceptsOf<F47> ? {
        [k in F47["name"]]+?: AcceptsOf<F47>;
    } : {
        [k in F47["name"]]: AcceptsOf<F47>;
    }) & (undefined extends AcceptsOf<F48> ? {
        [k in F48["name"]]+?: AcceptsOf<F48>;
    } : {
        [k in F48["name"]]: AcceptsOf<F48>;
    }));
});
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField, F43 extends AnyField, F44 extends AnyField, F45 extends AnyField, F46 extends AnyField, F47 extends AnyField, F48 extends AnyField, F49 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42, f43: F43, f44: F44, f45: F45, f46: F46, f47: F47, f48: F48, f49: F49): (AssertDelegate<(undefined extends TypeOf<F0> ? {
    [k in F0["name"]]+?: TypeOf<F0>;
} : {
    [k in F0["name"]]: TypeOf<F0>;
}) & (undefined extends TypeOf<F1> ? {
    [k in F1["name"]]+?: TypeOf<F1>;
} : {
    [k in F1["name"]]: TypeOf<F1>;
}) & (undefined extends TypeOf<F2> ? {
    [k in F2["name"]]+?: TypeOf<F2>;
} : {
    [k in F2["name"]]: TypeOf<F2>;
}) & (undefined extends TypeOf<F3> ? {
    [k in F3["name"]]+?: TypeOf<F3>;
} : {
    [k in F3["name"]]: TypeOf<F3>;
}) & (undefined extends TypeOf<F4> ? {
    [k in F4["name"]]+?: TypeOf<F4>;
} : {
    [k in F4["name"]]: TypeOf<F4>;
}) & (undefined extends TypeOf<F5> ? {
    [k in F5["name"]]+?: TypeOf<F5>;
} : {
    [k in F5["name"]]: TypeOf<F5>;
}) & (undefined extends TypeOf<F6> ? {
    [k in F6["name"]]+?: TypeOf<F6>;
} : {
    [k in F6["name"]]: TypeOf<F6>;
}) & (undefined extends TypeOf<F7> ? {
    [k in F7["name"]]+?: TypeOf<F7>;
} : {
    [k in F7["name"]]: TypeOf<F7>;
}) & (undefined extends TypeOf<F8> ? {
    [k in F8["name"]]+?: TypeOf<F8>;
} : {
    [k in F8["name"]]: TypeOf<F8>;
}) & (undefined extends TypeOf<F9> ? {
    [k in F9["name"]]+?: TypeOf<F9>;
} : {
    [k in F9["name"]]: TypeOf<F9>;
}) & (undefined extends TypeOf<F10> ? {
    [k in F10["name"]]+?: TypeOf<F10>;
} : {
    [k in F10["name"]]: TypeOf<F10>;
}) & (undefined extends TypeOf<F11> ? {
    [k in F11["name"]]+?: TypeOf<F11>;
} : {
    [k in F11["name"]]: TypeOf<F11>;
}) & (undefined extends TypeOf<F12> ? {
    [k in F12["name"]]+?: TypeOf<F12>;
} : {
    [k in F12["name"]]: TypeOf<F12>;
}) & (undefined extends TypeOf<F13> ? {
    [k in F13["name"]]+?: TypeOf<F13>;
} : {
    [k in F13["name"]]: TypeOf<F13>;
}) & (undefined extends TypeOf<F14> ? {
    [k in F14["name"]]+?: TypeOf<F14>;
} : {
    [k in F14["name"]]: TypeOf<F14>;
}) & (undefined extends TypeOf<F15> ? {
    [k in F15["name"]]+?: TypeOf<F15>;
} : {
    [k in F15["name"]]: TypeOf<F15>;
}) & (undefined extends TypeOf<F16> ? {
    [k in F16["name"]]+?: TypeOf<F16>;
} : {
    [k in F16["name"]]: TypeOf<F16>;
}) & (undefined extends TypeOf<F17> ? {
    [k in F17["name"]]+?: TypeOf<F17>;
} : {
    [k in F17["name"]]: TypeOf<F17>;
}) & (undefined extends TypeOf<F18> ? {
    [k in F18["name"]]+?: TypeOf<F18>;
} : {
    [k in F18["name"]]: TypeOf<F18>;
}) & (undefined extends TypeOf<F19> ? {
    [k in F19["name"]]+?: TypeOf<F19>;
} : {
    [k in F19["name"]]: TypeOf<F19>;
}) & (undefined extends TypeOf<F20> ? {
    [k in F20["name"]]+?: TypeOf<F20>;
} : {
    [k in F20["name"]]: TypeOf<F20>;
}) & (undefined extends TypeOf<F21> ? {
    [k in F21["name"]]+?: TypeOf<F21>;
} : {
    [k in F21["name"]]: TypeOf<F21>;
}) & (undefined extends TypeOf<F22> ? {
    [k in F22["name"]]+?: TypeOf<F22>;
} : {
    [k in F22["name"]]: TypeOf<F22>;
}) & (undefined extends TypeOf<F23> ? {
    [k in F23["name"]]+?: TypeOf<F23>;
} : {
    [k in F23["name"]]: TypeOf<F23>;
}) & (undefined extends TypeOf<F24> ? {
    [k in F24["name"]]+?: TypeOf<F24>;
} : {
    [k in F24["name"]]: TypeOf<F24>;
}) & (undefined extends TypeOf<F25> ? {
    [k in F25["name"]]+?: TypeOf<F25>;
} : {
    [k in F25["name"]]: TypeOf<F25>;
}) & (undefined extends TypeOf<F26> ? {
    [k in F26["name"]]+?: TypeOf<F26>;
} : {
    [k in F26["name"]]: TypeOf<F26>;
}) & (undefined extends TypeOf<F27> ? {
    [k in F27["name"]]+?: TypeOf<F27>;
} : {
    [k in F27["name"]]: TypeOf<F27>;
}) & (undefined extends TypeOf<F28> ? {
    [k in F28["name"]]+?: TypeOf<F28>;
} : {
    [k in F28["name"]]: TypeOf<F28>;
}) & (undefined extends TypeOf<F29> ? {
    [k in F29["name"]]+?: TypeOf<F29>;
} : {
    [k in F29["name"]]: TypeOf<F29>;
}) & (undefined extends TypeOf<F30> ? {
    [k in F30["name"]]+?: TypeOf<F30>;
} : {
    [k in F30["name"]]: TypeOf<F30>;
}) & (undefined extends TypeOf<F31> ? {
    [k in F31["name"]]+?: TypeOf<F31>;
} : {
    [k in F31["name"]]: TypeOf<F31>;
}) & (undefined extends TypeOf<F32> ? {
    [k in F32["name"]]+?: TypeOf<F32>;
} : {
    [k in F32["name"]]: TypeOf<F32>;
}) & (undefined extends TypeOf<F33> ? {
    [k in F33["name"]]+?: TypeOf<F33>;
} : {
    [k in F33["name"]]: TypeOf<F33>;
}) & (undefined extends TypeOf<F34> ? {
    [k in F34["name"]]+?: TypeOf<F34>;
} : {
    [k in F34["name"]]: TypeOf<F34>;
}) & (undefined extends TypeOf<F35> ? {
    [k in F35["name"]]+?: TypeOf<F35>;
} : {
    [k in F35["name"]]: TypeOf<F35>;
}) & (undefined extends TypeOf<F36> ? {
    [k in F36["name"]]+?: TypeOf<F36>;
} : {
    [k in F36["name"]]: TypeOf<F36>;
}) & (undefined extends TypeOf<F37> ? {
    [k in F37["name"]]+?: TypeOf<F37>;
} : {
    [k in F37["name"]]: TypeOf<F37>;
}) & (undefined extends TypeOf<F38> ? {
    [k in F38["name"]]+?: TypeOf<F38>;
} : {
    [k in F38["name"]]: TypeOf<F38>;
}) & (undefined extends TypeOf<F39> ? {
    [k in F39["name"]]+?: TypeOf<F39>;
} : {
    [k in F39["name"]]: TypeOf<F39>;
}) & (undefined extends TypeOf<F40> ? {
    [k in F40["name"]]+?: TypeOf<F40>;
} : {
    [k in F40["name"]]: TypeOf<F40>;
}) & (undefined extends TypeOf<F41> ? {
    [k in F41["name"]]+?: TypeOf<F41>;
} : {
    [k in F41["name"]]: TypeOf<F41>;
}) & (undefined extends TypeOf<F42> ? {
    [k in F42["name"]]+?: TypeOf<F42>;
} : {
    [k in F42["name"]]: TypeOf<F42>;
}) & (undefined extends TypeOf<F43> ? {
    [k in F43["name"]]+?: TypeOf<F43>;
} : {
    [k in F43["name"]]: TypeOf<F43>;
}) & (undefined extends TypeOf<F44> ? {
    [k in F44["name"]]+?: TypeOf<F44>;
} : {
    [k in F44["name"]]: TypeOf<F44>;
}) & (undefined extends TypeOf<F45> ? {
    [k in F45["name"]]+?: TypeOf<F45>;
} : {
    [k in F45["name"]]: TypeOf<F45>;
}) & (undefined extends TypeOf<F46> ? {
    [k in F46["name"]]+?: TypeOf<F46>;
} : {
    [k in F46["name"]]: TypeOf<F46>;
}) & (undefined extends TypeOf<F47> ? {
    [k in F47["name"]]+?: TypeOf<F47>;
} : {
    [k in F47["name"]]: TypeOf<F47>;
}) & (undefined extends TypeOf<F48> ? {
    [k in F48["name"]]+?: TypeOf<F48>;
} : {
    [k in F48["name"]]: TypeOf<F48>;
}) & (undefined extends TypeOf<F49> ? {
    [k in F49["name"]]+?: TypeOf<F49>;
} : {
    [k in F49["name"]]: TypeOf<F49>;
})> & {
    __accepts: ((undefined extends AcceptsOf<F0> ? {
        [k in F0["name"]]+?: AcceptsOf<F0>;
    } : {
        [k in F0["name"]]: AcceptsOf<F0>;
    }) & (undefined extends AcceptsOf<F1> ? {
        [k in F1["name"]]+?: AcceptsOf<F1>;
    } : {
        [k in F1["name"]]: AcceptsOf<F1>;
    }) & (undefined extends AcceptsOf<F2> ? {
        [k in F2["name"]]+?: AcceptsOf<F2>;
    } : {
        [k in F2["name"]]: AcceptsOf<F2>;
    }) & (undefined extends AcceptsOf<F3> ? {
        [k in F3["name"]]+?: AcceptsOf<F3>;
    } : {
        [k in F3["name"]]: AcceptsOf<F3>;
    }) & (undefined extends AcceptsOf<F4> ? {
        [k in F4["name"]]+?: AcceptsOf<F4>;
    } : {
        [k in F4["name"]]: AcceptsOf<F4>;
    }) & (undefined extends AcceptsOf<F5> ? {
        [k in F5["name"]]+?: AcceptsOf<F5>;
    } : {
        [k in F5["name"]]: AcceptsOf<F5>;
    }) & (undefined extends AcceptsOf<F6> ? {
        [k in F6["name"]]+?: AcceptsOf<F6>;
    } : {
        [k in F6["name"]]: AcceptsOf<F6>;
    }) & (undefined extends AcceptsOf<F7> ? {
        [k in F7["name"]]+?: AcceptsOf<F7>;
    } : {
        [k in F7["name"]]: AcceptsOf<F7>;
    }) & (undefined extends AcceptsOf<F8> ? {
        [k in F8["name"]]+?: AcceptsOf<F8>;
    } : {
        [k in F8["name"]]: AcceptsOf<F8>;
    }) & (undefined extends AcceptsOf<F9> ? {
        [k in F9["name"]]+?: AcceptsOf<F9>;
    } : {
        [k in F9["name"]]: AcceptsOf<F9>;
    }) & (undefined extends AcceptsOf<F10> ? {
        [k in F10["name"]]+?: AcceptsOf<F10>;
    } : {
        [k in F10["name"]]: AcceptsOf<F10>;
    }) & (undefined extends AcceptsOf<F11> ? {
        [k in F11["name"]]+?: AcceptsOf<F11>;
    } : {
        [k in F11["name"]]: AcceptsOf<F11>;
    }) & (undefined extends AcceptsOf<F12> ? {
        [k in F12["name"]]+?: AcceptsOf<F12>;
    } : {
        [k in F12["name"]]: AcceptsOf<F12>;
    }) & (undefined extends AcceptsOf<F13> ? {
        [k in F13["name"]]+?: AcceptsOf<F13>;
    } : {
        [k in F13["name"]]: AcceptsOf<F13>;
    }) & (undefined extends AcceptsOf<F14> ? {
        [k in F14["name"]]+?: AcceptsOf<F14>;
    } : {
        [k in F14["name"]]: AcceptsOf<F14>;
    }) & (undefined extends AcceptsOf<F15> ? {
        [k in F15["name"]]+?: AcceptsOf<F15>;
    } : {
        [k in F15["name"]]: AcceptsOf<F15>;
    }) & (undefined extends AcceptsOf<F16> ? {
        [k in F16["name"]]+?: AcceptsOf<F16>;
    } : {
        [k in F16["name"]]: AcceptsOf<F16>;
    }) & (undefined extends AcceptsOf<F17> ? {
        [k in F17["name"]]+?: AcceptsOf<F17>;
    } : {
        [k in F17["name"]]: AcceptsOf<F17>;
    }) & (undefined extends AcceptsOf<F18> ? {
        [k in F18["name"]]+?: AcceptsOf<F18>;
    } : {
        [k in F18["name"]]: AcceptsOf<F18>;
    }) & (undefined extends AcceptsOf<F19> ? {
        [k in F19["name"]]+?: AcceptsOf<F19>;
    } : {
        [k in F19["name"]]: AcceptsOf<F19>;
    }) & (undefined extends AcceptsOf<F20> ? {
        [k in F20["name"]]+?: AcceptsOf<F20>;
    } : {
        [k in F20["name"]]: AcceptsOf<F20>;
    }) & (undefined extends AcceptsOf<F21> ? {
        [k in F21["name"]]+?: AcceptsOf<F21>;
    } : {
        [k in F21["name"]]: AcceptsOf<F21>;
    }) & (undefined extends AcceptsOf<F22> ? {
        [k in F22["name"]]+?: AcceptsOf<F22>;
    } : {
        [k in F22["name"]]: AcceptsOf<F22>;
    }) & (undefined extends AcceptsOf<F23> ? {
        [k in F23["name"]]+?: AcceptsOf<F23>;
    } : {
        [k in F23["name"]]: AcceptsOf<F23>;
    }) & (undefined extends AcceptsOf<F24> ? {
        [k in F24["name"]]+?: AcceptsOf<F24>;
    } : {
        [k in F24["name"]]: AcceptsOf<F24>;
    }) & (undefined extends AcceptsOf<F25> ? {
        [k in F25["name"]]+?: AcceptsOf<F25>;
    } : {
        [k in F25["name"]]: AcceptsOf<F25>;
    }) & (undefined extends AcceptsOf<F26> ? {
        [k in F26["name"]]+?: AcceptsOf<F26>;
    } : {
        [k in F26["name"]]: AcceptsOf<F26>;
    }) & (undefined extends AcceptsOf<F27> ? {
        [k in F27["name"]]+?: AcceptsOf<F27>;
    } : {
        [k in F27["name"]]: AcceptsOf<F27>;
    }) & (undefined extends AcceptsOf<F28> ? {
        [k in F28["name"]]+?: AcceptsOf<F28>;
    } : {
        [k in F28["name"]]: AcceptsOf<F28>;
    }) & (undefined extends AcceptsOf<F29> ? {
        [k in F29["name"]]+?: AcceptsOf<F29>;
    } : {
        [k in F29["name"]]: AcceptsOf<F29>;
    }) & (undefined extends AcceptsOf<F30> ? {
        [k in F30["name"]]+?: AcceptsOf<F30>;
    } : {
        [k in F30["name"]]: AcceptsOf<F30>;
    }) & (undefined extends AcceptsOf<F31> ? {
        [k in F31["name"]]+?: AcceptsOf<F31>;
    } : {
        [k in F31["name"]]: AcceptsOf<F31>;
    }) & (undefined extends AcceptsOf<F32> ? {
        [k in F32["name"]]+?: AcceptsOf<F32>;
    } : {
        [k in F32["name"]]: AcceptsOf<F32>;
    }) & (undefined extends AcceptsOf<F33> ? {
        [k in F33["name"]]+?: AcceptsOf<F33>;
    } : {
        [k in F33["name"]]: AcceptsOf<F33>;
    }) & (undefined extends AcceptsOf<F34> ? {
        [k in F34["name"]]+?: AcceptsOf<F34>;
    } : {
        [k in F34["name"]]: AcceptsOf<F34>;
    }) & (undefined extends AcceptsOf<F35> ? {
        [k in F35["name"]]+?: AcceptsOf<F35>;
    } : {
        [k in F35["name"]]: AcceptsOf<F35>;
    }) & (undefined extends AcceptsOf<F36> ? {
        [k in F36["name"]]+?: AcceptsOf<F36>;
    } : {
        [k in F36["name"]]: AcceptsOf<F36>;
    }) & (undefined extends AcceptsOf<F37> ? {
        [k in F37["name"]]+?: AcceptsOf<F37>;
    } : {
        [k in F37["name"]]: AcceptsOf<F37>;
    }) & (undefined extends AcceptsOf<F38> ? {
        [k in F38["name"]]+?: AcceptsOf<F38>;
    } : {
        [k in F38["name"]]: AcceptsOf<F38>;
    }) & (undefined extends AcceptsOf<F39> ? {
        [k in F39["name"]]+?: AcceptsOf<F39>;
    } : {
        [k in F39["name"]]: AcceptsOf<F39>;
    }) & (undefined extends AcceptsOf<F40> ? {
        [k in F40["name"]]+?: AcceptsOf<F40>;
    } : {
        [k in F40["name"]]: AcceptsOf<F40>;
    }) & (undefined extends AcceptsOf<F41> ? {
        [k in F41["name"]]+?: AcceptsOf<F41>;
    } : {
        [k in F41["name"]]: AcceptsOf<F41>;
    }) & (undefined extends AcceptsOf<F42> ? {
        [k in F42["name"]]+?: AcceptsOf<F42>;
    } : {
        [k in F42["name"]]: AcceptsOf<F42>;
    }) & (undefined extends AcceptsOf<F43> ? {
        [k in F43["name"]]+?: AcceptsOf<F43>;
    } : {
        [k in F43["name"]]: AcceptsOf<F43>;
    }) & (undefined extends AcceptsOf<F44> ? {
        [k in F44["name"]]+?: AcceptsOf<F44>;
    } : {
        [k in F44["name"]]: AcceptsOf<F44>;
    }) & (undefined extends AcceptsOf<F45> ? {
        [k in F45["name"]]+?: AcceptsOf<F45>;
    } : {
        [k in F45["name"]]: AcceptsOf<F45>;
    }) & (undefined extends AcceptsOf<F46> ? {
        [k in F46["name"]]+?: AcceptsOf<F46>;
    } : {
        [k in F46["name"]]: AcceptsOf<F46>;
    }) & (undefined extends AcceptsOf<F47> ? {
        [k in F47["name"]]+?: AcceptsOf<F47>;
    } : {
        [k in F47["name"]]: AcceptsOf<F47>;
    }) & (undefined extends AcceptsOf<F48> ? {
        [k in F48["name"]]+?: AcceptsOf<F48>;
    } : {
        [k in F48["name"]]: AcceptsOf<F48>;
    }) & (undefined extends AcceptsOf<F49> ? {
        [k in F49["name"]]+?: AcceptsOf<F49>;
    } : {
        [k in F49["name"]]: AcceptsOf<F49>;
    }));
});
export declare function schema(...fields: AnyField[]): AssertDelegate<any>;
declare type ToSchemaType<RawFieldCollectionT extends RawFieldCollection> = ({
    [name in {
        [k in keyof RawFieldCollectionT]: (undefined extends TypeOf<RawFieldCollectionT[k]> ? never : k);
    }[keyof RawFieldCollectionT]]: TypeOf<RawFieldCollectionT[name]>;
} & {
    [name in {
        [k in keyof RawFieldCollectionT]: (undefined extends TypeOf<RawFieldCollectionT[k]> ? k : never);
    }[keyof RawFieldCollectionT]]?: TypeOf<RawFieldCollectionT[name]>;
});
declare type ToSchemaAccepts<RawFieldCollectionT extends RawFieldCollection> = ({
    [name in {
        [k in keyof RawFieldCollectionT]: (undefined extends AcceptsOf<RawFieldCollectionT[k]> ? never : k);
    }[keyof RawFieldCollectionT]]: AcceptsOf<RawFieldCollectionT[name]>;
} & {
    [name in {
        [k in keyof RawFieldCollectionT]: (undefined extends AcceptsOf<RawFieldCollectionT[k]> ? k : never);
    }[keyof RawFieldCollectionT]]?: AcceptsOf<RawFieldCollectionT[name]>;
});
export declare function toSchema<RawFieldCollectionT extends RawFieldCollection>(raw: RawFieldCollectionT): (AssertDelegate<{
    [name in keyof ToSchemaType<RawFieldCollectionT>]: (TypeOf<RawFieldCollectionT[name]>);
}> & {
    __accepts: ({
        [name in keyof ToSchemaAccepts<RawFieldCollectionT>]: (AcceptsOf<RawFieldCollectionT[name]>);
    });
});
export {};
