import pickle 
import sys

with open('../JohannesburgPrediction/model/johannesburg_model.pkl', "rb") as file:
    model = pickle.load(file)


def __main__():
    # print(sys.args[1])
    print('Hello world')
