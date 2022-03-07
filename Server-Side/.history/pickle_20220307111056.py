import pickle 
import sys
import json

# with open('../JohannesburgPrediction/model/johannesburg_model.pkl', "rb") as file:
#     model = pickle.load(file)

# print('Hello world', sys.argv[1])
data = json.loads(sys.argv[1])
print("hello world", data)
