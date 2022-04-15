from flask import Flask, render_template, request
import numpy as np
import pickle
from flask_cors import CORS

with open("./model/johannesburg_model.pkl","rb") as file:
    model = pickle.load(file)

app = Flask(__name__, template_folder="templates")
CORS(app)
@app.route("/", methods=["GET", "POST"])

def main():
    # if request.method == "GET":
    print ('test')
    #     return (render_template("index.html"))
    if request.method == "POST":
        print('REQUEEETTEE : ' , request.args.get('bed')))
        print('test 2 ')
        # print(request)
        # bedrooms = request.form["bedrooms"]
        # bathrooms = request.form["bathrooms"]
        # type_of_property = request.form["type_of_property"]
        # erf_size = request.form["erf_size"]
        # floor_size = request.form["floor_size"]
        # pool = request.form["pool"]
        # rates_and_taxes = request.form["rates_and_taxes"]
        # parking_space = request.form["parking_space"]
        # pets_allowed = request.form["pets_allowed"]
        # prediction = model.predict(np.array([bedrooms, bathrooms, type_of_property, erf_size, floor_size, pool, rates_and_taxes, parking_space, pets_allowed]).reshape(1, -1))
        # return render_template("index.html", original_input = {"Bedrooms": bedrooms, "Bathrooms": bathrooms,"Type of Property": type_of_property,"Erf Size": erf_size, "Floor Size": floor_size, "Pool": pool, "Rates and Taxes": rates_and_taxes, "Parking Space": parking_space, "Pets Allowed": pets_allowed}, result=prediction)
    
if __name__ == "__main__":
        app.run()