import pickle 
import sys

with open('../JohannesburgPrediction/model/johannesburg_model.pkl', "rb") as file:
    model = pickle.load(file)


print(sys.args[1])
print('Hello world')
