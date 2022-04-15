import pickle 
import sys
import json

print('sali sali an')
# with open('../JohannesburgPrediction/model/johannesburg_model.pkl', "rb") as file:
# model = pickle.load(open("./johannesburg_model.pkl", "rb"))
print(model)
# print('Hello world', sys.argv[1])
data = json.loads(sys.argv[1])
# data = data.values()
# print(type(data))
print("hello world", data.values())
