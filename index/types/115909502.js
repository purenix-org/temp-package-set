// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["115909502"] = [{"values":[{"sourceSpan":{"start":[120,1],"name":".spago/nonempty/master/src/Data/NonEmpty.purs","end":[120,40]},"score":0,"packageInfo":{"values":["nonempty"],"tag":"Package"},"name":"tail","moduleName":"Data.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","NonEmpty"],"NonEmpty"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get everything but the 'first' element of a non-empty container.\n\n```purescript\ntail (1 :| [2, 3]) == [2, 3]\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[104,1],"name":".spago/nonempty/master/src/Data/NonEmpty.purs","end":[104,58]},"score":0,"packageInfo":{"values":["nonempty"],"tag":"Package"},"name":"oneOf","moduleName":"Data.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","NonEmpty"],"NonEmpty"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns the `alt` (`<|>`) result of:\n- The first element lifted to the container of the remaining elements.\n- The remaining elements.\n\n```purescript\nimport Data.Maybe(Maybe(..))\n\noneOf (1 :| Nothing) == Just 1\noneOf (1 :| Just 2) == Just 1\n\noneOf (1 :| [2, 3]) == [1,2,3]\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[283,1],"name":".spago/either/master/src/Data/Either.purs","end":[283,42]},"score":0,"packageInfo":{"values":["either"],"tag":"Package"},"name":"hush","moduleName":"Data.Either","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Turns an `Either` into a `Maybe`, by throwing eventual `Left` values away and converting\nthem into `Nothing`. `Right` values get turned into `Just`s.\n\n```purescript\nhush (Left \"ParseError\") = Nothing\nhush (Right 42) = Just 42\n```\n"}],"tag":"SearchResult"}]