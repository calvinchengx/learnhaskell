class Position(object):
    def __init__(self, initial):
        self._val = initial
    def get(self):
        return self._val
    def move(self, n):
        self._val += n 

def f(x):
    x = g(x)
    x = h(x)
    x = i(x)
    print("3 + 2 + 5 - 13 = %s" % x.get())
    return x

def g(x):
    x.move(2)
    return x

def h(x):
    x.move(5)
    return x

def i(x):
    x.move(-13)
    return x

import threading as t

x = Position(3)
t1 = t.Thread(target=f, name="thread1", args=[x])
t2 = t.Thread(target=f, name="thread2", args=[x])
t1.start()
t2.start()
t1.join()
t2.join()
