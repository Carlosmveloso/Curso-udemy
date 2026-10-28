name = input("Type your name: ")
age = int(input("Type your age: "))

if name and age:
    print(f"Your name is {name}")
    print(f"Your name inverted looks like this {name[::-1]}")

    if " " in name:
        print("Your name have spaces")
    else:
        print("Your name dont have spaces")

    print(f"Your name have {len(name)} letters.")
    print(f"The first letter of your name is {name[0]}")
    print(f"The last letter of your name is {name[-1]}")
else:
    print("Sorry, you dont filled in the fields")