from flask import Flask, render_template, request
import numpy as np
import pickle
from flask_cors import CORS

with open("./model/johannesburg_model.pkl","rb") as file:
    model = pickle.load(file)

app = Flask(__name__, template_folder="templates")
CORS(app, resources={"/": {"origins": "*"}}, methods=[GET, HEAD, POST])
@app.route(r"/", methods=["POST"])

def main():
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
        print('Prediction ==== ', prediction)
        # return render_template("index.html", original_input = {"Bedrooms": bedrooms, "Bathrooms": bathrooms,"Type of Property": type_of_property,"Erf Size": erf_size, "Floor Size": floor_size, "Pool": pool, "Rates and Taxes": rates_and_taxes, "Parking Space": parking_space, "Pets Allowed": pets_allowed}, result=prediction)
    
if __name__ == "__main__":
        app.run()