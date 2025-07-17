# https://leetcode.com/problems/jewels-and-stones/description/?envType=problem-list-v2&envId=string
def numJewelsInStones(jewels: str, stones: str) -> int:
    total = 0
    for j in jewels:
        total += stones.count(j)
    return total

j = "aA"
s = "aAAbbbb"
print(numJewelsInStones(j, s))

j = "z"
s = "ZZ"
print(numJewelsInStones(j, s))
