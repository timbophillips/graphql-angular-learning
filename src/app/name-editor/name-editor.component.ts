import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  template: `
    <label>
      Name:
    </label>
      <input type="text" formControlName="name">
    <p>
  Value: {{ name.value }}
</p>
  `,
  styles: []
})
export class NameEditorComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    id: new FormControl('')
  })
  constructor() { }

  ngOnInit() {
  }

}
