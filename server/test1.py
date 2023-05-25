# dictionaries

user = {
    'username': 'Mario',
    'last_name': 'Aguilar',
    'age': 36,
}

print(user)
print(type(user))

print(f"{user['username']} {user['last_name']}")

# List = array

flist = [1, 2, 3]
print(flist)
flist.append(4)
print(flist)

print(len(flist))  # count of items
print(len(user['username']))  # count the characters
print(len(user))  # count the keys

ages = [32, 74, 20, 69, 52, 26, 31, 77, 43, 73, 51, 57, 19, 79, 40, 34, 27, 23, 21, 44,
        53, 55, 24, 36, 41, 47, 78, 46, 68, 75, 49, 83, 61, 60, 29, 56, 67, 17, 70, 81, 87, 38]
# print all ages or all numbers


def exc1():
    total = 0

    for age in ages:
        print(age)
        total += age
    print(f'The total is: {total}')

# sum all the numbers


def exc2():

    count = 0

    for age in ages:

        if age >= 21 and age <= 40:

            print(age)
            count += 1

    print(f'The greater numbers of 21 is: {count}')


exc1()
exc2()


# print all the numbers  greater than or equial to 21
# count and how many users are equal or greater than 21
