module Main where

a ::  Maybe Integer
a = Just 1

f ::  Integer -> Maybe Integer
f = \x -> Just (x + 1)

main ::  IO ()
main = do
  let ans = a >>= f
  print ans
