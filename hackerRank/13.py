# https://www.hackerrank.com/challenges/py-set-intersection-operation/problem

import sys

if __name__ == '__main__':
    a = int(sys.stdin.readline())
    b = list(map(int, sys.stdin.readline().split()))
    c = int(sys.stdin.readline())
    d = list(map(int, sys.stdin.readline().split()))

    res = 0

    b_set = set(b)
    for i in d:
        if i in b_set:
            res += 1

    sys.stdout.write('%s' % res)


'''
9
1 2 3 4 5 6 7 8 9
9
10 1 2 3 11 21 55 6 8
'''
