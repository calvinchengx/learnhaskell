import Control.Concurrent
import Control.Applicative (Applicative(..))
import Control.Monad       (liftM, ap)

{-Implement a simple custom monad?-}

data Position t = Position t deriving (Show) {- type container -}

instance Functor Position where
    fmap = liftM
 
instance Applicative Position where
    pure  = return
    (<*>) = ap

instance Monad Position where 
    return n = Position n       {- return -}
    (Position n) >>= f = f n    {- bind -}

{-Mess around  with our custom monad 'Position'-}
g n = Position (n + 2)
h n = Position (n + 5)
i n = Position (n - 13)
 
x = Position 3
f1 x = x >>= g >>= h >>= i >>= return
f2 x = x >>= g >>= h >>= i >>= return

{-Alternative ways of writing our monadic operation

f1 x = do
    a <- x
    b <- g a
    c <- h b
    i c

f1 = g >=> h >=> i      -- Kleisli arrows is used for monadic composition
                        -- recall that for non-monadic function composition, we simply use .
-}

main ::  IO String
main = do 
    _ <- forkIO $ print (f1 x) 
    _ <- forkIO $ print (f2 x) 
    getLine {-User terminates the I/O with a carriage return -}
