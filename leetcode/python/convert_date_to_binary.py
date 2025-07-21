# https://leetcode.com/problems/convert-date-to-binary/description/?envType=problem-list-v2&envId=string

def convertDateToBinary(date: str) -> str:
    converted = ""
    ydm = date.split("-")

    for el in ydm:
        converted += str(bin(int(el))).replace("0b", "") + "-"

    return converted.strip("-")

def convertDateToBinary2(date: str) -> str:
    year, month, day = date.split("-")
    y = bin(int(year))[2:]
    m = bin(int(month))[2:]
    d = bin(int(day))[2:]

    return f"{y}-{m}-{d}"

print(convertDateToBinary("2080-02-29"))
print(convertDateToBinary("1900-01-01"))

print("option 2")

print(convertDateToBinary2("2080-02-29"))
print(convertDateToBinary2("1900-01-01"))
