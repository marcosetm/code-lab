# https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/?envType=problem-list-v2&envId=string
def validStrings(n: int) -> list[str]:
    solution = ["0", "1"]
    if n == 1:
        return solution
    for _ in range(n - 1):
        valid_bin = []
        for s in solution:
            if s[-1] == "0":
                valid_bin.append(s + "1")
            else:
                valid_bin.append(s + "0")
                valid_bin.append(s + "1")
        solution = valid_bin
    return solution

n = 5
print(validStrings(n))


