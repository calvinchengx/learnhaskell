module Main where

import Control.Applicative

generator ::  [(Integer, Integer)]
generator = (,) <$> [1..10] <*> [1..10]

consumer ::  IO ()
consumer = mapM_ print generator

main ::  IO ()
main = consumer
