data Maybe' a = Nothing' | Just' a

instance Monad Maybe' where
    return = Just'
    Nothing' >>= f = Nothing' 
    (Just' x) >>= f = f x
