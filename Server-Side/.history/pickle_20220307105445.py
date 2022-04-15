import pickle 
import sys
import json

with open('../JohannesburgPrediction/model/johannesburg_model.pkl', "rb") as file:
    model = pickle.load(file)

data = json.loads(sys.args[1])
print('Hello world')
print(data)
