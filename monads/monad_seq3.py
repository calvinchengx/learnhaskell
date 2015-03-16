ranks = list("abcdefgh")
files = list("12345678")

def chess_squares_1():
    return [ (rank, file)
             for rank in ranks
             for file in files ]

assert len(chess_squares_1()) == 64
assert chess_squares_1()[:3] == [('a', '1'), ('a', '2'), ('a', '3')]

