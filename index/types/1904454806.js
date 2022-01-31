// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1904454806"] = [{"values":[{"sourceSpan":{"start":[281,1],"name":".spago/miraculix-lite/v0.2.0-lite/src/deps/foldable-traversable/Data/FoldableWithIndex.purs","end":[288,7]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"surroundMapWithIndex","moduleName":"LocalDependency.Data.FoldableWithIndex","info":{"values":[{"type":{"tag":"ForAll","contents":["i",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["LocalDependency","Data","FoldableWithIndex"],"FoldableWithIndex"],"constraintArgs":[{"tag":"TypeVar","contents":"i"},{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup"],"Semigroup"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"m"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"m"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`foldMapWithIndex` but with each element surrounded by some fixed value.\n\nFor example:\n\n```purescript\n> surroundMapWithIndex \"*\" (\\i x -> show i <> x) []\n= \"*\"\n\n> surroundMapWithIndex \"*\" (\\i x -> show i <> x) [\"a\"]\n= \"*0a*\"\n\n> surroundMapWithIndex \"*\" (\\i x -> show i <> x) [\"a\", \"b\"]\n= \"*0a*1b*\"\n\n> surroundMapWithIndex \"*\" (\\i x -> show i <> x) [\"a\", \"b\", \"c\"]\n= \"*0a*1b*2c*\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[281,1],"name":".spago/foldable-traversable/master/src/Data/FoldableWithIndex.purs","end":[288,7]},"score":0,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"surroundMapWithIndex","moduleName":"Data.FoldableWithIndex","info":{"values":[{"type":{"tag":"ForAll","contents":["i",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","FoldableWithIndex"],"FoldableWithIndex"],"constraintArgs":[{"tag":"TypeVar","contents":"i"},{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup"],"Semigroup"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"m"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"m"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`foldMapWithIndex` but with each element surrounded by some fixed value.\n\nFor example:\n\n```purescript\n> surroundMapWithIndex \"*\" (\\i x -> show i <> x) []\n= \"*\"\n\n> surroundMapWithIndex \"*\" (\\i x -> show i <> x) [\"a\"]\n= \"*0a*\"\n\n> surroundMapWithIndex \"*\" (\\i x -> show i <> x) [\"a\", \"b\"]\n= \"*0a*1b*\"\n\n> surroundMapWithIndex \"*\" (\\i x -> show i <> x) [\"a\", \"b\", \"c\"]\n= \"*0a*1b*2c*\"\n```\n"}],"tag":"SearchResult"}]