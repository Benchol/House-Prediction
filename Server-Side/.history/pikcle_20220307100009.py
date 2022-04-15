import pickle 

with open('../JohannesburgPrediction/model/johannesburg_model.pkl', "rb") as file:
    model = pickle.load(file)