from flask import Flask, render_template, request
import numpy as np
import pickle
from flask_cors import CORS, cross_origin


with open("./model/johannesburg_model.pkl","rb") as file:
    model = pickle.load(file)
# , template_folder="templates"
# app = Flask(__name__, template_folder="templates")
app = Flask(__name__, template_folder="../Client-Side/FrontPredict/src/")
CORS(app, methods=["GET", "POST"], allow_headers="*")
@app.route(r"/api/", methods=["POST", "GET"])
@cross_origin()
def main():
    print('dans flask ===== ', request.get_json())
    if request.method == "POST":
        request_data = request.get_json()
        data = request_data['house']
        bedrooms = data['bedroom']
        bathrooms = data["bathroom"]
        type_of_property = data["type_property"]
        erf_size = data["erf_size"]
        floor_size = data["floor_size"]
        pool = data["pool"]
        rates_and_taxes = data["taxes"]
        parking_space = data["garage"]
        pets_allowed = data["pets_allowed"]
        prediction = model.predict(np.array([bedrooms, bathrooms, type_of_property, erf_size, floor_size, pool, rates_and_taxes, parking_space, pets_allowed]).reshape(1, -1))
        print('Prediction ==== ', prediction[0])
        # original_input = {"Bedrooms": bedrooms, "Bathrooms": bathrooms,"Type of Property": type_of_property,"Erf Size": erf_size, "Floor Size": floor_size, "Pool": pool, "Rates and Taxes": rates_and_taxes, "Parking Space": parking_space, "Pets Allowed": pets_allowed},
        # return render_template("index.html", result=prediction)
        return prediction[0]
    
if __name__ == "__main__":
        app.run()