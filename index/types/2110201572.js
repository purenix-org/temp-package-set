// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2110201572"] = [{"values":[{"sourceSpan":{"start":[230,1],"name":".spago/miraculix-lite/v0.2.0-lite/src/deps/maybe/Data/Maybe.purs","end":[230,51]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"maybe","moduleName":"LocalDependency.Data.Maybe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Takes a default value, a function, and a `Maybe` value. If the `Maybe`\nvalue is `Nothing` the default value is returned, otherwise the function\nis applied to the value inside the `Just` and the result is returned.\n\n``` purescript\nmaybe x f Nothing == x\nmaybe x f (Just y) == f y\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[230,1],"name":".spago/maybe/master/src/Data/Maybe.purs","end":[230,51]},"score":0,"packageInfo":{"values":["maybe"],"tag":"Package"},"name":"maybe","moduleName":"Data.Maybe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Takes a default value, a function, and a `Maybe` value. If the `Maybe`\nvalue is `Nothing` the default value is returned, otherwise the function\nis applied to the value inside the `Just` and the result is returned.\n\n``` purescript\nmaybe x f Nothing == x\nmaybe x f (Just y) == f y\n```\n"}],"tag":"SearchResult"}]