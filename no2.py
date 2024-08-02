def longest_word(sentence):
    words = sentence.split()
    longest = max(words, key=len)
    return longest, len(longest)


sentence = "Saya sangat senang mengerjakan soal algoritma"
word, length = longest_word(sentence)
print(f"{word}: {length} characters")
