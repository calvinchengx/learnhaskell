import Control.Parallel

g x = x + 2
h x = x + 5
i x = x - 13

{-f x = do-}
    {-y <- return $ i (h ( g x) )-}
    {-print x; putStr " + 2 + 5 - 13 = "; print y-}

f x = do
    x1 <- return $ g x
    x2 <- return $ h x1
    x3 <- return $ i x2 
    print x; putStr " + 2 + 5 - 13 = "; print x3

{-f x =   x >>=-}
        {-g >>=-}
        {-h >>=-}
        {-i >>=-}
        {-return-}

f1 = f 3
f2 = f 3

main = do
    f1 `par` f2
    f1  {- force evaluation of f1 -}
