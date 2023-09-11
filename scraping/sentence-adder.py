f = open("input.txt")
sentences = f.readlines()
sentences = [i.strip() for i in sentences]
f.close()

for i in range(0,len(sentences)):
    sql = "INSERT INTO sentences (number, sentence) VALUES(" + str(i+52) + ",\"" + sentences[i] + "\");"
    print(sql)

