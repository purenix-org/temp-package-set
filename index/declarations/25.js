// This file was generated by purescript-docs-search.
window.DocsSearchIndex["25"] = [["snd",[{"values":[{"sourceSpan":{"start":[122,1],"name":".spago/tuples/master/src/Data/Tuple.purs","end":[122,34]},"score":0,"packageInfo":{"values":["tuples"],"tag":"Package"},"name":"snd","moduleName":"Data.Tuple","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeVar","contents":"b"}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns the second component of a tuple.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[122,1],"name":".spago/miraculix-lite/v0.2.0-lite/src/deps/tuples/Data/Tuple.purs","end":[122,34]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"snd","moduleName":"LocalDependency.Data.Tuple","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeVar","contents":"b"}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns the second component of a tuple.\n"}],"tag":"SearchResult"}]],["snoc",[{"values":[{"sourceSpan":{"start":[226,1],"name":".spago/arrays/master/src/Data/Array/NonEmpty.purs","end":[226,58]},"score":0,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"snoc","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[265,1],"name":".spago/arrays/master/src/Data/Array.purs","end":[265,42]},"score":0,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"snoc","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Append an element to the end of an array, creating a new array.\n\n```purescript\nsnoc [1, 2, 3] 4 = [1, 2, 3, 4]\n```\n\n"}],"tag":"SearchResult"}]],["snoc'",[{"values":[{"sourceSpan":{"start":[229,1],"name":".spago/arrays/master/src/Data/Array/NonEmpty.purs","end":[229,51]},"score":0,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"snoc'","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["row",[{"values":[{"sourceSpan":null,"score":0,"packageInfo":{"values":[],"tag":"Builtin"},"name":"Row","moduleName":"Prim","info":{"values":[{"kind":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]}}],"tag":"ExternDataResult"},"hashAnchor":"t","comments":"`Row` is the kind constructor of label-indexed types which map type-level strings to other types.\nFor example, the kind of `Record` is `Row Type -> Type`, mapping field names to values.\n"}],"tag":"SearchResult"}]],["rowlist",[{"values":[{"sourceSpan":null,"score":0,"packageInfo":{"values":[],"tag":"Builtin"},"name":"RowList","moduleName":"Prim.RowList","info":{"values":[{"kind":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]}}],"tag":"ExternDataResult"},"hashAnchor":"t","comments":"A type level list representation of a row of types.\n"}],"tag":"SearchResult"}]],["rowtolist",[{"values":[{"sourceSpan":null,"score":0,"packageInfo":{"values":[],"tag":"Builtin"},"name":"RowToList","moduleName":"Prim.RowList","info":{"values":[{"superclasses":[],"fundeps":[[["row"],["list"]]],"arguments":[["row",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeVar","contents":"k"}]}],["list",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim","RowList"],"RowList"]},{"tag":"TypeVar","contents":"k"}]}]]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":"Compiler solved type class for generating a `RowList` from a closed row\nof types.  Entries are sorted by label and duplicates are preserved in\nthe order they appeared in the row.\n"}],"tag":"SearchResult"}]],["or",[{"values":[{"sourceSpan":{"start":[364,1],"name":".spago/foldable-traversable/master/src/Data/Foldable.purs","end":[364,61]},"score":0,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"or","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The disjunction of all the values in a data structure. When specialized\nto `Boolean`, this function will test whether any of the values in a data\nstructure is `true`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[364,1],"name":".spago/miraculix-lite/v0.2.0-lite/src/deps/foldable-traversable/Data/Foldable.purs","end":[364,61]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"or","moduleName":"LocalDependency.Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["LocalDependency","Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The disjunction of all the values in a data structure. When specialized\nto `Boolean`, this function will test whether any of the values in a data\nstructure is `true`.\n"}],"tag":"SearchResult"}]],["ord",[{"values":[{"sourceSpan":{"start":[37,1],"name":".spago/prelude/master/src/Data/Ord.purs","end":[38,32]},"score":1,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"Ord","moduleName":"Data.Ord","info":{"values":[{"superclasses":[{"constraintClass":[["Data","Eq"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]}],"fundeps":[],"arguments":[["a",null]]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":"The `Ord` type class represents types which support comparisons with a\n_total order_.\n\n`Ord` instances should satisfy the laws of total orderings:\n\n- Reflexivity: `a <= a`\n- Antisymmetry: if `a <= b` and `b <= a` then `a = b`\n- Transitivity: if `a <= b` and `b <= c` then `a <= c`\n"}],"tag":"SearchResult"}]],["ord1",[{"values":[{"sourceSpan":{"start":[220,1],"name":".spago/prelude/master/src/Data/Ord.purs","end":[221,56]},"score":1,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"Ord1","moduleName":"Data.Ord","info":{"values":[{"superclasses":[{"constraintClass":[["Data","Eq"],"Eq1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]}],"fundeps":[],"arguments":[["f",null]]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":"The `Ord1` type class represents totally ordered type constructors.\n"}],"tag":"SearchResult"}]],["ordering",[{"values":[{"sourceSpan":{"start":[13,1],"name":".spago/prelude/master/src/Data/Ordering.purs","end":[13,29]},"score":1,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"Ordering","moduleName":"Data.Ordering","info":{"values":[{"typeArguments":[],"dataDeclType":"data"}],"tag":"DataResult"},"hashAnchor":"t","comments":"The `Ordering` data type represents the three possible outcomes of\ncomparing two values:\n\n`LT` - The first value is _less than_ the second.\n`GT` - The first value is _greater than_ the second.\n`EQ` - The first value is _equal to_ the second.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":null,"score":0,"packageInfo":{"values":[],"tag":"Builtin"},"name":"Ordering","moduleName":"Prim.Ordering","info":{"values":[{"kind":{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}}],"tag":"ExternDataResult"},"hashAnchor":"t","comments":"The `Ordering` kind represents the three possibilities of comparing two\ntypes of the same kind: `LT` (less than), `EQ` (equal to), and\n`GT` (greater than).\n"}],"tag":"SearchResult"}]],["ordrecord",[{"values":[{"sourceSpan":{"start":[227,1],"name":".spago/prelude/master/src/Data/Ord.purs","end":[228,91]},"score":1,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"OrdRecord","moduleName":"Data.Ord","info":{"values":[{"superclasses":[{"constraintClass":[["Data","Eq"],"EqRecord"],"constraintArgs":[{"tag":"TypeVar","contents":"rowlist"},{"tag":"TypeVar","contents":"row"}]}],"fundeps":[],"arguments":[["rowlist",null],["row",null]]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"}]]]