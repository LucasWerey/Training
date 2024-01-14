# https://www.hackerrank.com/challenges/python-integers-come-in-all-sizes/problem

import sys

if __name__ == '__main__':
    a = int(sys.stdin.readline())
    b = int(sys.stdin.readline())
    c = int(sys.stdin.readline())
    d = int(sys.stdin.readline())

    res = a**b + c**d
    sys.stdout.write("%s" % res)
