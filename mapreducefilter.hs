module Main where 

aList ::  [Integer]
aList = [0, 1, 2]

addOne :: [Integer]
addOne = map (+1) aList

lessThanTwo :: [Integer]
lessThanTwo = filter (<2) aList

reduceToSum :: Integer
reduceToSum = foldl (+) 0 aList
reduceToSumR :: Integer
reduceToSumR = foldr (+) 0 aList
simpleSum ::  Integer
simpleSum = sum aList

main ::  IO ()
main = do
    print aList
    print addOne
    print lessThanTwo
    print reduceToSum
    print reduceToSumR
    print simpleSum
    print aList
