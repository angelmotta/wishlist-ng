import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactFormGroup = new FormGroup({
    senderName: new FormControl(''),
    senderEmail: new FormControl(''),
    senderMessage: new FormControl(''),
  });

  handleSubmit() {
    console.log(`Handle subit form event`);
    console.log(this.contactFormGroup.value);
  }
}
