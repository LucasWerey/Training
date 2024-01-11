# https://www.hackerrank.com/challenges/html-parser-part-1/problem
from html.parser import HTMLParser
import sys


class OwnHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        sys.stdout.write("Start : ")
        sys.stdout.write(tag)
        sys.stdout.write("\n")

        for i in range(0, len(attrs)):
            sys.stdout.write("-> ")
            sys.stdout.write(attrs[i][0])
            sys.stdout.write(" > ")
            if attrs[i][1] is None:
                sys.stdout.write('None')
            else:
                sys.stdout.write(attrs[i][1])
            sys.stdout.write("\n")

    def handle_endtag(self, tag):
        sys.stdout.write("End   : ")
        sys.stdout.write(tag)
        sys.stdout.write("\n")

    def handle_startendtag(self, tag, attrs):
        sys.stdout.write("Empty : ")
        sys.stdout.write(tag)
        sys.stdout.write("\n")

        for i in range(0, len(attrs)):
            sys.stdout.write("-> ")
            sys.stdout.write(attrs[i][0])
            sys.stdout.write(" > ")
            if attrs[i][1] is None:
                sys.stdout.write('None')
            else:
                sys.stdout.write(attrs[i][1])
            sys.stdout.write("\n")


if __name__ == "__main__":
    n = int(input())

    html_code = "".join([input() for _ in range(n)])

    parser = OwnHTMLParser()
    parser.feed(html_code)


'''
Start : Tag1
End   : Tag1
Start : Tag2
-> Attribute2[0] > Attribute_value2[0]
-> Attribute2[1] > Attribute_value2[1]
-> Attribute2[2] > Attribute_value2[2]
Start : Tag3
-> Attribute3[0] > None
Empty : Tag4
-> Attribute4[0] > Attribute_value4[0]
End   : Tag3
End   : Tag2
'''
