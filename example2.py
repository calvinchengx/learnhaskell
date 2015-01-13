class X(object):
    def __init__(self, initial):
        self._val = initial
    def get(self):
        return self._val
    def increment(self, n):
        self._val += n 

def g(x):
    x.increment(2)
    print("3 + 2 = %s" % (x.get()))
    return x

def h(x):
    x.increment(5)
    print("3 + 5 = %s" % x.get())
    return x

import threading as t

x = X(3)
t1 = t.Thread(target=g, name="thread 1", args=[x])
# we expect to see 3 + 5 = 8 but thread 1 beats thread 2 to object x 
# object x occupies a memory space that is shared by both thread 1 and thread 2
# And because thread 1 has beaten thread 2 to it, it has altered x's value to 5
# This is the problem with objects - which *are* data representations and 
# parallel execution becomes a problem
t2 = t.Thread(target=h, name="thread 2", args=[x])  
t1.start()
t2.start()
t1.join()
t2.join()
