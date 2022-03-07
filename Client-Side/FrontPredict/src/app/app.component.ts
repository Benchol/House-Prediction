import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { House } from './@cores/models/house.model';
import { PredictServiceService } from './@cores/services/predict-service.service';

export interface SelectBool {
  value: boolean,
  valueView: string
}

export interface SelectType {
  value: string,
  valueView: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PredictionFrontEnd';
  predictForm!: FormGroup;
  selectedValue!: string;
  formLabel: any[];
  selectLabel: any[];
  selectLabelType: SelectType[];
  choiceBool: any[];
  result!: number;
  isOpen = false;


  constructor(private formBuilder: FormBuilder, private resultService: PredictServiceService) {

    this.initForm();

    this.formLabel = [
      {
        label: "Bedroom",
        icon: "bed",
        type: "number",
        unity: "[ 1 - 20 ]",
        control: "bedroom"
      },
      {
        label: "Bathroom",
        icon: "waves",
        type: "number",
        unity: "[ 1 - 20 ]",
        control: "bathroom"
      },
      {
        label: "Erf Size",
        icon: "border_inner",
        type: "number",
        unity: "en m²",
        control: "erf_size"
      },
      {
        label: "Floor Size",
        icon: "border_clear",
        type: "number",
        unity: "en m²",
        control: "floor_size"
      },
      {
        label: "Garage",
        icon: "drive_eta",
        type: "number",
        unity: "[ 1 - 10 ]",
        control: "garage"
      },
      {
        label: "Rates and taxes",
        icon: "payment",
        type: "number",
        unity: "en R",
        control: "taxes"
      },
      // {
      //   label: "Levies",
      //   icon: "account_balance_wallet",
      //   type: "number",
      //   unity: "en R"
      // }
    ];

    this.selectLabel = [
      {
        label: "Pool",
        icon: "pool",
        type: "text",
        values: [
          {
            value: 'yes'
          },
          {
            value: 'no'
          }
        ],
        unity: "Yes / No",
        control: "pool",
      },
      {
        label: "Type",
        icon: "merge_type",
        type: "text",
        unity: "type",
        control: "type_property",
        values: [
          {
            value: 'House'
          },
          {
            value: 'Appartment/Flat'
          },
          {
            value: 'TownHouse'
          }
        ],
      },
      {
        label: "Pets Allowed",
        icon: "pets",
        type: "text",
        unity: "Yes / No",
        control: "pets",
        values: [
          {
            value: 'yes'
          },
          {
            value: 'no'
          }
        ],
      },
    ];


    this.selectLabelType = [
      {
        value: 'House',
        valueView: 'House',
      },
      {
        value: 'Appartement/Flat',
        valueView: 'Appartement/Flat',
      },
      {
        value: 'TownHouse',
        valueView: 'TownHouse',
      }
    ];

    this.choiceBool = [
      {
        value: true,
        valueView: 'Yes',
      },
      {
        value: false,
        valueView: 'No',
      }
    ];

  }

  ngOnInit() {
    console.log('cca');
    this.result = 455;
    this.onGetResultPrediction();

  }

  initForm() {
    console.log('init form');
    this.predictForm = this.formBuilder.group({
      bedroom: [0, Validators.required],
      bathroom: [0, Validators.required],
      erf_size: [0, Validators.required],
      floor_size: [0, Validators.required],
      garage: [0, Validators.required],
      taxes: [0, Validators.required],
      type_property: ["", Validators.required],
      pool: [false, Validators.required],
      pets: [false, Validators.required],
    });
  }

  onPredict() {

    this.isOpen = !this.isOpen;

    console.log('on predict form');

    const bedroom = this.predictForm.get('bedroom')?.value;
    console.log('bed : ', bedroom);
    const bathroom = this.predictForm.get('bathroom')?.value;
    const erf_size = this.predictForm.get('erf_size')?.value;
    const floor_size = this.predictForm.get('floor_size')?.value;
    const garage = this.predictForm.get('garage')?.value;
    const taxes = this.predictForm.get('taxes')?.value;
    let type_property = this.predictForm.get('type_property')?.value;
    console.log('typeeee : ', type_property);

    if (type_property == 'Appartement/Flat') {
      type_property = 0;
    } else if (type_property == 'House') {
      type_property = 1;
    } else {
      type_property = 2;
    }

    let pool = this.predictForm.get('pool')?.value;
    console.log('pool : ', pool);
    if (pool == true) {
      pool = 1;
    } else {
      pool = 0;
    }

    let pets = this.predictForm.get('pets')?.value;

    if (pets == true) {
      pets = 1;
    } else {
      pets = 0;
    }

    const house_to_predict = new House(bedroom, bathroom, erf_size, floor_size, type_property, pool, pets, taxes, garage);

    console.log("House predicting... ", house_to_predict);

    this.resultService.predictHousePrice(house_to_predict);
    console.log('Get indray zao');

    this.resultService.getResultPrediction().then(
      (result: number) => {
        console.log('Result : ', result);
        this.result = result;
      }
    )

  }

  closeResult() {
    this.isOpen = !this.isOpen;
  }

  onGetResultPrediction() {
    this.result = 0.61;
  }

}
