import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PrintingService } from '../services/printing.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css'],
})
export class PrintComponent implements OnInit {
  @ViewChild('printContent') printComponentHTML?: ElementRef;

  myForm!: FormGroup;
  isPrintLoading = false;
  filename = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _printingService: PrintingService
  ) {}

  ngOnInit(): void {
    this.myForm = this._formBuilder.group({
      title: [''],
      description: [''],
      customNotes: [''],
      isStaticDescription: [false],
    });
  }

  print(): void {
    if (this.printComponentHTML) {
      this.isPrintLoading = true;
      this._printingService
        .printPDFFromHTML(this.printComponentHTML?.nativeElement, this.filename)
        .then(() => {
          this.filename = '';
          this.isPrintLoading = false;
        })
        .catch((err) => {
          alert('There was an error!');
          console.error(JSON.stringify(err));
          this.isPrintLoading = false;
        });
    }
  }
}
