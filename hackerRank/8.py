# https://www.hackerrank.com/challenges/nested-list/problem

def generateList(names, scores):
    list = []
    for i in range(len(names)):
        list.append([names[i], scores[i]])
    return list


if __name__ == '__main__':
    names = []
    scores = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        names.append(name)
        scores.append(score)
    liste = generateList(names, scores)
    minimum = min(scores)
    listwithoutMax = []
    for i in range(len(liste)):
        if liste[i][1] != minimum:
            listwithoutMax.append(liste[i])

    while minimum in scores:
        scores.remove(minimum)

    minimum = min(scores)
    res = []
    for i in range(len(listwithoutMax)):
        if listwithoutMax[i][1] == minimum:
            res.append(listwithoutMax[i][0])
    res.sort()
    for i in range(len(res)):
        print(res[i])
