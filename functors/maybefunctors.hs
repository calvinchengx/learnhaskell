module Main where

aList ::  [Integer]
aList = [1, 2, 3]

addOne ::  Num a => a -> a
addOne a = a + 1

addTwo ::  Num a => a -> a
addTwo a = a + 2

composedFn ::  Integer -> Integer
composedFn = addOne . addTwo
res ::  [Integer]
res = map composedFn aList

main ::  IO ()
main = do
    print res
    let res2 = fmap composedFn Nothing
    print res2
    let res3 = fmap composedFn (Just 1)
    print res3
