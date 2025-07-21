# https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/?envType=problem-list-v2&envId=string
from collections import Counter
def maxFreqSum(s: str) -> int:
    vowel_count = [0]
    consonant_count = [0]
    c = Counter(s)

    for k in c.keys():
        if k in 'aeiou':
            vowel_count.append(c[k])
        else:
            consonant_count.append(c[k])
    
    return max(vowel_count) + max(consonant_count)

s = "successes"
print(maxFreqSum(s))
s = "aeiaeia"
print(maxFreqSum(s))

