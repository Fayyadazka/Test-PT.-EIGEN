def reverse_alphabet(string):

    alphabets = [char for char in string if char.isalpha()]
    numbers = [char for char in string if char.isdigit()]

    # Reverse the alphabets
    reversed_alphabets = "".join(reversed(alphabets))

    # kombinasi reversed alphabets with numbers
    result = reversed_alphabets + "".join(numbers)
    return result


input_string = "NEGIE1"
print(reverse_alphabet(input_string))
