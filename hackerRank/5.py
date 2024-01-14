# https://www.hackerrank.com/challenges/validating-uid/problem?isFullScreen=true

import re


def validate_id(input_text):
    pattern = re.compile(r"/^[a-z]{0,10}+$/ ", re.IGNORECASE)
    return pattern.match(input_text)
