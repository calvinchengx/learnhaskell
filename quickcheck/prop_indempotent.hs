import Test.QuickCheck
import Data.List

-- testing whether idempotence property is true
prop_Idempotent :: Ord a => [a] -> Bool
prop_Idempotent xs = sort (sort xs) == sort xs

main ::  IO ()
main = quickCheck(prop_Idempotent :: [Int] -> Bool) -- we need to specify concrete element type.
                                                    -- if we use [a] -> Bool, ghc will not know 
                                                    -- how to generate data
