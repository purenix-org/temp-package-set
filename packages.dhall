{ arrays =
  { dependencies =
    [ "bifunctors"
    , "control"
    , "foldable-traversable"
    , "maybe"
    , "nonempty"
    , "partial"
    , "prelude"
    , "st"
    , "tuples"
    , "unfoldable"
    , "unsafe-coerce"
    ]
  , repo = "https://github.com/purenix-org/purescript-arrays.git"
  , version = "master"
  }
, bifunctors =
  { dependencies = [ "const", "either", "newtype", "prelude", "tuples" ]
  , repo = "https://github.com/purenix-org/purescript-bifunctors.git"
  , version = "master"
  }
, const =
  { dependencies = [ "invariant", "newtype", "prelude" ]
  , repo = "https://github.com/purenix-org/purescript-const.git"
  , version = "master"
  }
, contravariant =
  { dependencies = [ "const", "either", "newtype", "prelude", "tuples" ]
  , repo = "https://github.com/purenix-org/purescript-contravariant.git"
  , version = "master"
  }
, control =
  { dependencies = [ "newtype", "prelude" ]
  , repo = "https://github.com/purenix-org/purescript-control.git"
  , version = "master"
  }
, distributive =
  { dependencies =
    [ "identity", "newtype", "prelude", "tuples", "type-equality" ]
  , repo = "https://github.com/purenix-org/purescript-distributive.git"
  , version = "master"
  }
, either =
  { dependencies = [ "control", "invariant", "maybe", "prelude" ]
  , repo = "https://github.com/purenix-org/purescript-either.git"
  , version = "master"
  }
, exists =
  { dependencies = [ "unsafe-coerce" ]
  , repo = "https://github.com/purenix-org/purescript-exists.git"
  , version = "master"
  }
, foldable-traversable =
  { dependencies =
    [ "bifunctors"
    , "const"
    , "control"
    , "either"
    , "functors"
    , "identity"
    , "maybe"
    , "newtype"
    , "orders"
    , "prelude"
    , "tuples"
    ]
  , repo = "https://github.com/purenix-org/purescript-foldable-traversable.git"
  , version = "master"
  }
, functors =
  { dependencies =
    [ "bifunctors"
    , "const"
    , "contravariant"
    , "control"
    , "distributive"
    , "either"
    , "invariant"
    , "maybe"
    , "newtype"
    , "prelude"
    , "profunctor"
    , "tuples"
    , "unsafe-coerce"
    ]
  , repo = "https://github.com/purenix-org/purescript-functors.git"
  , version = "master"
  }
, identity =
  { dependencies = [ "control", "invariant", "newtype", "prelude" ]
  , repo = "https://github.com/purenix-org/purescript-identity.git"
  , version = "master"
  }
, invariant =
  { dependencies = [ "control", "prelude" ]
  , repo = "https://github.com/purenix-org/purescript-invariant.git"
  , version = "master"
  }
, maybe =
  { dependencies = [ "control", "invariant", "newtype", "prelude" ]
  , repo = "https://github.com/purenix-org/purescript-maybe.git"
  , version = "master"
  }
, metadata =
  { dependencies = [] : List Text
  , repo = "https://github.com/spacchetti/purescript-metadata.git"
  , version = "v0.14.3"
  }
, miraculix =
  { dependencies =
    [ "prelude"
    , "foldable-traversable"
    , "newtype"
    ]
  , repo = "https://github.com/thought2/purescript-miraculix.git"
  , version = "v0.1.0"
  }
, newtype =
  { dependencies = [ "prelude", "safe-coerce" ]
  , repo = "https://github.com/purenix-org/purescript-newtype.git"
  , version = "master"
  }
, nonempty =
  { dependencies =
    [ "control"
    , "foldable-traversable"
    , "maybe"
    , "prelude"
    , "tuples"
    , "unfoldable"
    ]
  , repo = "https://github.com/purenix-org/purescript-nonempty.git"
  , version = "master"
  }
, orders =
  { dependencies = [ "newtype", "prelude" ]
  , repo = "https://github.com/purenix-org/purescript-orders.git"
  , version = "master"
  }
, partial =
  { dependencies = [] : List Text
  , repo = "https://github.com/purenix-org/purescript-partial.git"
  , version = "master"
  }
, prelude =
  { dependencies = [] : List Text
  , repo = "https://github.com/purenix-org/purescript-prelude.git"
  , version = "master"
  }
, profunctor =
  { dependencies =
    [ "control"
    , "distributive"
    , "either"
    , "exists"
    , "invariant"
    , "newtype"
    , "prelude"
    , "tuples"
    ]
  , repo = "https://github.com/purenix-org/purescript-profunctor.git"
  , version = "master"
  }
, safe-coerce =
  { dependencies = [ "unsafe-coerce" ]
  , repo = "https://github.com/purenix-org/purescript-safe-coerce.git"
  , version = "master"
  }
, st =
  { dependencies = [ "prelude" ]
  , repo = "https://github.com/purenix-org/purescript-st.git"
  , version = "master"
  }
, tuples =
  { dependencies = [ "control", "invariant", "prelude" ]
  , repo = "https://github.com/purenix-org/purescript-tuples.git"
  , version = "master"
  }
, type-equality =
  { dependencies = [] : List Text
  , repo = "https://github.com/purenix-org/purescript-type-equality.git"
  , version = "master"
  }
, unfoldable =
  { dependencies =
    [ "foldable-traversable", "maybe", "partial", "prelude", "tuples" ]
  , repo = "https://github.com/purenix-org/purescript-unfoldable.git"
  , version = "master"
  }
, unsafe-coerce =
  { dependencies = [] : List Text
  , repo = "https://github.com/purenix-org/purescript-unsafe-coerce.git"
  , version = "master"
  }
}
