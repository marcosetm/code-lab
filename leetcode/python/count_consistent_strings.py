# https://leetcode.com/problems/count-the-number-of-consistent-strings/description/?envType=problem-list-v2&envId=string
def countConsistentStrings(allowed: str, words: list[str]) -> int:
    final_count = len(words)

    for word in words:
        for letter in word:
            if letter not in allowed:
                final_count -= 1
                break
    
    return final_count

# Alternative
def countConsistentStrings2(allowed: str, words: list[str]) -> int:
    set_allowed = set(allowed)
    count = 0

    for word in words:
        if set(word).issubset(set_allowed):
            count += 1
    return count


allowed = "fstqyienx"
words = ["n","eeitfns","eqqqsfs","i","feniqis","lhoa","yqyitei","sqtn","kug","z","neqqis"]
print(f"count: {countConsistentStrings2(allowed, words)}")



