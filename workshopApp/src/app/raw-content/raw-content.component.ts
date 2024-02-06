import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-raw-content',
  templateUrl: './raw-content.component.html',
  styleUrls: ['./raw-content.component.css']
})
export class RawContentComponent {

  @Input() form!: FormGroup;

}
