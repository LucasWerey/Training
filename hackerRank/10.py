#https://www.hackerrank.com/challenges/python-power-mod-power/problem

import sys

if __name__ == '__main__':
    a = int(input())
    b = int(input())
    m = int(input())
    firstline = pow(a, b)
    secondline = pow(a, b, m)
    sys.stdout.write("%s" % firstline)
    sys.stdout.write("\n")
    sys.stdout.write("%s" % secondline)
