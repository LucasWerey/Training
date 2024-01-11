# https://www.hackerrank.com/challenges/detect-html-tags-attributes-and-attribute-values/problem

from html.parser import HTMLParser
import sys


class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
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

    parser = MyHTMLParser()
    parser.feed(html_code)
