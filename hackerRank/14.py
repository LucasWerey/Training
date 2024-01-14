# https://www.hackerrank.com/challenges/py-set-difference-operation/problem

import sys

if __name__ == '__main__':
    a = int(sys.stdin.readline())
    b = set(map(int, sys.stdin.readline().split()))
    c = int(sys.stdin.readline())
    d = set(map(int, sys.stdin.readline().split()))

    diff = b.difference(d)

    res = len(diff)

    sys.stdout.write("%s" % res)


'''
9
1 2 3 4 5 6 7 8 9
9
10 1 2 3 11 21 55 6 8
'''
