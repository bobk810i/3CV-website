// Export PDF
var options = {
  margin:       0.8,
  filename:     'cv.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};

const exportPdf = document.getElementById('export-pdf');

function generatePdf(){
    // html2pdf(exportPdf, options);
    html2pdf().from(exportPdf).set(options).save();
    // html2pdf().from(exportPdf).set(options).output();
    // html2pdf().from(exportPdf).save();
}

