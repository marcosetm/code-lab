# https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/description/?envType=problem-list-v2&envId=string
def minOperations(boxes: str) -> list[int]:
    ops = 0
    answer = []

    for curr_box in range(l := len(boxes)):
        for pointer in range(l):
            if pointer == curr_box:
                continue
            if boxes[pointer] == '1':
                ops += abs(curr_box - pointer)
        answer.append(ops)
        ops = 0
            
    return answer

boxes = "110"
print(minOperations(boxes))

boxes = "001011"
print(minOperations(boxes))