let List/map = https://prelude.dhall-lang.org/v11.1.0/List/map

let Map = https://prelude.dhall-lang.org/v15.0.0/Map/Type

let getKeys
    : ∀(a : Type) → Map Text a → List Text
    = λ(a : Type) →
      λ(xs : Map Text a) →
        List/map
          { mapKey : Text, mapValue : a }
          Text
          (λ(x : { mapKey : Text, mapValue : a }) → x.mapKey)
          xs

let packages = ./packages.dhall

let dependencies =
      getKeys
        { dependencies : List Text, repo : Text, version : Text }
        (toMap packages)

in  { name = "pkgs-with-all-deps"
    , dependencies
    , backend = "purenix"
    , packages
    , sources = [ "src/**/*.purs" ]
    }
