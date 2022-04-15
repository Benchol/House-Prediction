import pickle 

with open('../JohannesburgPrediction/model/johannesburg_model.pkl') as file:
    model = pickle.load(file)