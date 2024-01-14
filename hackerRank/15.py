# https://www.hackerrank.com/challenges/py-set-symmetric-difference-operation/problem

import sys

if __name__ == '__main__':
    a = int(sys.stdin.readline())
    b = set(map(int, sys.stdin.readline().split()))
    c = int(sys.stdin.readline())
    d = set(map(int, sys.stdin.readline().split()))

    diff = b.symmetric_difference(d)
    res = len(diff)
    sys.stdout.write("%s" % res)
