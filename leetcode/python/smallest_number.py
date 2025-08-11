from itertools import permutations
# class Solution:
#     # Check if the current sequence matches the pattern of 'I' and 'D'
#     def check(self, number_sequence: str, pattern: str) -> bool:
#         for index in range(len(pattern)):
#             # Ensure the sequence is in increasing order at 'I' positions
#             if (
#                 pattern[index] == "I"
#                 and number_sequence[index] > number_sequence[index + 1]
#             ):
#                 return False
#             # Ensure the sequence is in decreasing order at 'D' positions
#             elif (
#                 pattern[index] == "D"
#                 and number_sequence[index] < number_sequence[index + 1]
#             ):
#                 return False
#         return True

#     def smallestNumber(self, pattern: str) -> str:
#         pattern_length = len(pattern)

#         # Generate sequence "123...n+1"
#         number_sequence = "".join(
#             str(num) for num in range(1, pattern_length + 2)
#         )

#         # Use permutations generator
#         for permutation in permutations(number_sequence):
#             permutation_str = "".join(permutation)
#             if self.check(permutation_str, pattern):
#                 return permutation_str
#         return ""




# https://leetcode.com/problems/construct-smallest-number-from-di-string/?envType=problem-list-v2&envId=string

def matches_pattern(pattern, num):
    for i, p in enumerate(pattern):
        if p == "I" and (num[i] > num[i + 1]):
            return False
        elif p == "D" and (num[i]) < num[i + 1]:
            return False
    
    return True

def smallestNumber(pattern: str) -> str:            
    pattern_len = len(pattern)
    num = "".join(str(n) for n in range(1, pattern_len + 2))
    # largest placeholder
    solution = "9" * (pattern_len + 2)

    num_permutations = permutations(num)

    for permutation in num_permutations:
        if matches_pattern(pattern, permutation):
            seq = "".join(permutation)
            if int(seq) < int(solution):
                solution = seq

    return solution
    # # simpler and better solution found online:
    # res = ""
    # l = len(pattern)

    # stack = []
    # for i in range(l + 1):
    #     stack.append(i + 1)
        
    #     if i == l or pattern[i] == 'I':
    #         while stack:
    #             res += str(stack.pop())

    # return res

pattern = "IIIDIDDD"
print(smallestNumber(pattern))

pattern = "DDD"
print(smallestNumber(pattern))
