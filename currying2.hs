module Main where

people ::  [(String, String)]
people = [("name", "Calvin")
    ,("wat", "John")
    ,("name", "Thomas")
    ]

{- generic filterByKey function that accepts a string as keyname -}
filterByKey :: Eq a => a -> [(a, t)] -> [t]
filterByKey _ [] = []
filterByKey p ((k, v):xs)
    | p == k    = v : filterByKey p xs
    | otherwise = filterByKey p xs

filterByName :: [(String, t)] -> [t]
filterByName = filterByKey "name"

getName :: [(a, b)] -> [b]
getName = map snd

main ::  IO ()
main = do
    let names = getName people  {- snd simply plucks out the 2nd value in the tuple -}
    print names
    let names2 = filterByKey "name" people
    print names2
    let names3 = filterByName people
    print names3
