# https://www.hackerrank.com/challenges/html-parser-part-2/problem


from html.parser import HTMLParser
import sys


class MyHTMLParser(HTMLParser):
    def handle_comment(self, data):
        if '\n' in data:
            sys.stdout.write(">>> Multi-line Comment\n")
        else:
            sys.stdout.write(">>> Single-line Comment\n")
        sys.stdout.write(data)
        sys.stdout.write("\n")

    def handle_data(self, data):
        if data.strip():
            sys.stdout.write(">>> Data\n")
            sys.stdout.write(data)
            sys.stdout.write("\n")


html = ""
for i in range(int(input())):
    html += input().rstrip()
    html += '\n'

parser = MyHTMLParser()
parser.feed(html)
parser.close()
