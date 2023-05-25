users = [
    {
        'id': 1,
        'name': 'Alice',
        'gender': 'female',
        'age': 25,
        'preferred_color': 'blue'
    },
    {
        'id': 2,
        'name': 'Bob',
        'gender': 'male',
        'age': 35,
        'preferred_color': 'GREEN'
    },
    {
        'id': 3,
        'name': 'Charlie',
        'gender': 'male',
        'age': 45,
        'preferred_color': 'Red'
    },
    {
        'id': 4,
        'name': 'Danielle',
        'gender': 'female',
        'age': 30,
        'preferred_color': 'YelloW'
    },
    {
        'id': 5,
        'name': 'Evelyn',
        'gender': 'female',
        'age': 20,
        'preferred_color': 'PuRplE'
    },
    {
        'id': 6,
        'name': 'Frank',
        'gender': 'male',
        'age': 28,
        'preferred_color': 'purple'
    },
    {
        'id': 7,
        'name': 'Grace',
        'gender': 'female',
        'age': 31,
        'preferred_color': 'GREEN'
    },
    {
        'id': 8,
        'name': 'Henry',
        'gender': 'male',
        'age': 40,
        'preferred_color': 'BLUE'
    },
    {
        'id': 9,
        'name': 'Isabelle',
        'gender': 'female',
        'age': 27,
        'preferred_color': 'red'
    },
    {
        'id': 10,
        'name': 'Jack',
        'gender': 'male',
        'age': 24,
        'preferred_color': 'yellow'
    }
]

# Logic


def exa1():
    # print all the names
    for user in users:
        print(user['name'])


# exa1()

# count how many male and female people exist in the dictionary array


def exa2():
    # print all the names
    male = 0
    female = 0
    for user in users:
        if user['gender'] == 'male':
            male += 1
        elif user['gender'] == 'female':
            female += 1
    
    print(f'Male: {male}')
    print(f'Female: {female}')

exa2()

def find_by_id(id):
    for user in users:
        if user['id'] == id:
            print(user)

find_by_id(2)
find_by_id(4)
