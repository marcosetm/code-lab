# https://leetcode.com/problems/find-words-containing-character/description/?envType=problem-list-v2&envId=string

def findWordsContaining(words: list[str], x: str) -> list[int]:
    result = []

    for i in range(len(words)):
        if (words[i].find(x) != -1):
            result.append(i)

    return result

# real pythonic solution return [i for i,v in enumerate(w) if x in v]

print(findWordsContaining(["leet","code"], "e"))
print(findWordsContaining(["abc","bcd","aaaa","cbc"], "a"))
print(findWordsContaining(["abc","bcd","aaaa","cbc"], "z"))
