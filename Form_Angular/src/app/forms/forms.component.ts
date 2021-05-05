import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  score;
  good_awnsers;
  color;
  is_check = false;
  display = false;
  questions = new FormGroup({
    question_1: new FormGroup({
      awnser: new FormControl(),
    }),
    question_2: new FormGroup({
      awnser: new FormControl(),
    }),
    question_3: new FormGroup({
      awnser: new FormControl(),
    }),
    question_4: new FormGroup({
      awnser: new FormControl(),
    }),
    question_5: new FormGroup({
      awnser: new FormControl(),
    }),
    question_6: new FormGroup({
      awnser: new FormControl(),
    })
  });
  updateAwnsers(awnsers) {
    let i = 0;

    console.log(this.questions.value)

    for (const property in awnsers) {
      if(awnsers[property].awnser === "1") {
        console.log("prout");
        i += parseInt(awnsers[property].awnser);
      }
    }

    this.score = i;
    this.display = true;
    this.color = 'green';
    this.is_check = true;

    for (const cont in this.questions.controls) {
      this.questions.controls[cont].disable();
    }
  };
  restart() {
    this.display = false;
    this.color = null;
    this.is_check = false;

    for (const cont in this.questions.controls) {
      this.questions.controls[cont].reset();
      this.questions.controls[cont].enable();
    }
    // this.questions.controls['question_1'].reset();
    // this.questions.controls['question_2'].reset();
    // this.questions.controls['question_3'].reset();
    // this.questions.controls['question_4'].reset();
    // this.questions.controls['question_5'].reset();
    // this.questions.controls['question_6'].reset();
    // this.questions.controls['question_1'].enable();
    // this.questions.controls['question_2'].enable();
    // this.questions.controls['question_3'].enable();
    // this.questions.controls['question_4'].enable();
    // this.questions.controls['question_5'].enable();
    // this.questions.controls['question_6'].enable();
  }
  ngOnInit(): void {
  }
  
}
