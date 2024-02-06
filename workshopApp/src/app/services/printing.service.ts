import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PrintingService {

  public async printPDFFromHTML(HTML: HTMLElement, fileName?: string): Promise<void> {
    const doc: jsPDF = new jsPDF({
      format: 'letter',
      unit: 'px',
      putOnlyUsedFonts: true,
    });

    await doc.html(HTML, {
      callback: function(jsPDF) {
        doc.save(fileName || 'document');
      },
      autoPaging: 'text',
      margin: [20, 30, 20, 30],
    })
  }
}
