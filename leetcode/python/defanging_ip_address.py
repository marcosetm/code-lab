# https://leetcode.com/problems/defanging-an-ip-address/description/?envType=problem-list-v2&envId=string
def defangIPaddr(address: str) -> str:
    return address.replace(".", "[.]")

print(defangIPaddr("1.1.1.1"))