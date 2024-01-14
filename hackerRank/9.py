# https://www.hackerrank.com/challenges/finding-the-percentage/problem?isFullScreen=true

def getMarksByName(query_name, student_marks):
    return student_marks[query_name]


def calculateAverage(marks):
    return sum(marks)/len(marks)


if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    marks = getMarksByName(query_name, student_marks)
    average = calculateAverage(marks)
    print("{:.2f}".format(average))

'''
3
Krishna 67 68 69
Arjun 70 98 63
Malika 52 56 60
Malika
'''
