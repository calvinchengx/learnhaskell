{-source: http://overtond.blogspot.sg/2008/07/pre.html-}

runTest = runFD test

test = do 
    x <- newVar [0..3]
    y <- newVar [0..3]
    ((x .<. y) `mplus` (x `same` y))
    x `hasValue` 2
    labelling [x, y]
