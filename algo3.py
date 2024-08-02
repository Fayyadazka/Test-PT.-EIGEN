def count_occurrences(input_list, query_list):
    result = []
    for query in query_list:
        count = input_list.count(query)
        result.append(count)
    return result


INPUT = ["xc", "dz", "bbb", "dz"]
QUERY = ["bbb", "ac", "dz"]
print(count_occurrences(INPUT, QUERY))
