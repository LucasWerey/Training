# https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem

if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    liste = []
    for item in arr:
        liste.append(item)
    maximum = max(liste)
    while maximum in liste:
        liste.remove(maximum)
    liste.sort(reverse=True)
    print(liste[0])
