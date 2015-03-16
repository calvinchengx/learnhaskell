main ::  IO ()
main = do
    x <- getX
    putStrLn x

getX ::  IO [Char]
getX = do
    return "My Shangri-La"
    return "You are the best"
    return "The beautiful horse"
    return "whatever you want"
