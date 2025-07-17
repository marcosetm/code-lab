# https://leetcode.com/problems/final-value-of-variable-after-performing-operations/?envType=problem-list-v2&envId=string
def finalValueAfterOperations(operations: list[str]) -> int:
    res = 0

    for op in operations:
        if op[1] == "-":
            res -= 1
        else:
            res += 1

    return res

print(finalValueAfterOperations(["--X","X++","X++"]))
print(finalValueAfterOperations(["++X","++X","X++"]))
print(finalValueAfterOperations(["X++","++X","--X","X--"]))