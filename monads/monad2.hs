{-f ::  Num a => a -> a-}
{-f x = let -}
        {-x1 = x + 2 -}
        {-x2 = x1 + 5-}
        {-x3 = x2 - 13-}
        {-in x3-}
import Control.Applicative (Applicative(..))
import Control.Monad       (liftM, ap)
 

data Position t = Position t deriving (Show)

instance Functor Position where
    fmap = liftM
 
instance Applicative Position where
    pure  = return
    (<*>) = ap

instance Monad Position where
    return x = Position x
    (Position x) >>= f = f x


{-myFunction start_pos = (+) <$> Position start_pos <*> Position 2 <*> Position 5 <*> Position (-13)-}
