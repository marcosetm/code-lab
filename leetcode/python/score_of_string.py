# https://leetcode.com/problems/score-of-a-string/?envType=problem-list-v2&envId=string

def solution(s: str) -> int:
    score = 0 

    for i in range(len(s) - 1):
        score += abs( ord(s[i]) - ord(s[i + 1]) )

    return score

if __name__ == "__main__":
    s = "hello"
    print(f"Score of {s}: {solution(s)}")

    s = "zaz"
    print(f"Score of {s}: {solution(s)}")