module Main where

import Control.Applicative

ans ::  Maybe Integer
ans = (+) <$> Just 4 <*> Just 6

main ::  IO ()
main = print ans
