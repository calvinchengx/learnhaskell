newtype MyList a = MyList [a]

instance Monad MyList where
    return x = MyList [x]
    (MyList xs) >>= f = MyList (concatMap (g . f) xs)
        where g (MyList xs) = xs
