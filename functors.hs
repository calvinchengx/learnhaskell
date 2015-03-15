module Main where

addOne ::  Num a => a -> a
addOne a = a + 1

addTwo ::  Num a => a -> a
addTwo a = a + 2

result ::  Num b => [b] -> [b]
result xs =  map addOne xs

main ::  IO ()
main = do
    let ans = result [10]
    print ans
