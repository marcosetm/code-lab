# https://leetcode.com/problems/goal-parser-interpretation/?envType=problem-list-v2&envId=string

def interpret(command: str) -> str:
    return command.replace("()", "o").replace("(al)", "al")

print(interpret("G()(al)"))
print(interpret("G()()()()(al)"))
print(interpret("(al)G(al)()()G"))