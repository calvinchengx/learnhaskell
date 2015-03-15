module Main where

f :: Integer
f = max 4 5

fPartial :: (Ord a, Num a) => a -> a 
fPartial = max 4

main ::  IO ()
main = do
  print f 
  let g = fPartial 10
  print g
