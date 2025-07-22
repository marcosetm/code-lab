# https://leetcode.com/problems/reverse-degree-of-a-string/description/?envType=problem-list-v2&envId=string
def reverseDegree(s: str) -> int:
    alphabet = [chr(i) for i in range(ord('a'), ord('z') + 1)]
    rev_alpha = [i + 1 for i in range(len(alphabet) -1, -1, -1)]
    res = 0

    for i, letter in enumerate(list(s)):
        idx = alphabet.index(letter)
        # get value from rev_alpha and 
        # multiply by 1 based idx in given str
        res += rev_alpha[idx] * (i + 1)
    
    return res

def reverseDegree2(s: str) -> int:
    ans, idx = 0, 1
    for ch in s:
        ans+= (123 - ord(ch)) * idx
        idx+= 1

    return ans 

s = "abc"
print(reverseDegree(s))

s = "zaza"
print(reverseDegree(s))
