// Sortable sections list
var sortableList = document.getElementById('sections-list-sortable');

const sortableOptions = {
  handle: '.sortable-handle',
  animation: 150,
}

var sortable = Sortable.create(sortableList, sortableOptions);

// Tooltips

/* 
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">school</span>
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">business_center</span>
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">build</span>
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">edit</span>
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">import_contacts</span>
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">speaker_notes</span>
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">add_circle</span>
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">arrow_forward_ios</span>
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">star</span>
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">check_box_outline_blank</span>
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">radio_button_checked</span>
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">radio_button_unchecked</span>
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">apps</span>
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">arrow_circle_right</span>
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">public</span>
<span onclick="iconsButtonClick(this)" class="material-symbols-outlined">person</span>
*/

const iconTooltipContent = '<div class="tooltip-icons-grid"> <span onclick="iconsButtonClick(this)" class="material-symbols-outlined">school</span><span onclick="iconsButtonClick(this)" class="material-symbols-outlined">business_center</span><span onclick="iconsButtonClick(this)" class="material-symbols-outlined">build</span><span onclick="iconsButtonClick(this)" class="material-symbols-outlined">edit</span><span onclick="iconsButtonClick(this)" class="material-symbols-outlined">import_contacts</span><span onclick="iconsButtonClick(this)" class="material-symbols-outlined">speaker_notes</span><span onclick="iconsButtonClick(this)" class="material-symbols-outlined">add_circle</span><span onclick="iconsButtonClick(this)" class="material-symbols-outlined">arrow_forward_ios</span><span onclick="iconsButtonClick(this)" class="material-symbols-outlined">star</span><span onclick="iconsButtonClick(this)" class="material-symbols-outlined">check_box_outline_blank</span><span onclick="iconsButtonClick(this)" class="material-symbols-outlined">radio_button_checked</span><span onclick="iconsButtonClick(this)" class="material-symbols-outlined">radio_button_unchecked</span><span onclick="iconsButtonClick(this)" class="material-symbols-outlined">apps</span><span onclick="iconsButtonClick(this)" class="material-symbols-outlined">arrow_circle_right</span><span onclick="iconsButtonClick(this)" class="material-symbols-outlined">public</span><span onclick="iconsButtonClick(this)" class="material-symbols-outlined">person</span> </div>';
const iconsTippyConstructor = {
  content: iconTooltipContent,
  placement: 'bottom',
  arrow: false,
  animation: 'fade',
  allowHTML: true,
  interactive: true,
};

const selectionTooltipContent = '<div onclick="selectionButtonClick(this.id)" class="selection-option" id="select_wydarzenia">Wydarzenia</div> <div onclick="selectionButtonClick(this.id)" class="selection-option" id="select_lista">Lista</div> <div onclick="selectionButtonClick(this.id)" class="selection-option" id="select_lista-opis">Lista z opisem</div> <div onclick="selectionButtonClick(this.id)" class="selection-option" id="select_text">Tekst</div> <div onclick="selectionButtonClick(this.id)" class="selection-option" id="select_rodo">Klauzula RODO</div> <div onclick="selectionButtonClick(this.id)" class="selection-option" id="select_podzial">Podział strony</div>';
tippy('.add-section-main-btn', {
  content: selectionTooltipContent,
  placement: 'bottom',
  arrow: false,
  animation: 'fade',
  allowHTML: true,
  interactive: true,
});


// Section selection button
function selectionButtonClick(feature){

  switch(feature){

    case 'select_wydarzenia':
      const temp_wydarzenia = document.getElementById('section_wydarzenia-tmp').content;
      createSelectionFeature(temp_wydarzenia);
      break;

    case 'select_lista':
      const temp_lista = document.getElementById('section_lista-tmp').content;
      createSelectionFeature(temp_lista);
      break;

    case 'select_lista-opis':
      const temp_lista_opis = document.getElementById('section_listaOpis-tmp').content;
      createSelectionFeature(temp_lista_opis);
      break;

    case 'select_text':
      const temp_lista_tekst = document.getElementById('section_tekst-tmp').content;
      createSelectionFeature(temp_lista_tekst);
      break;

    case 'select_rodo':
      const temp_lista_rodo = document.getElementById('section_rodo-tmp').content;
      createSelectionFeature(temp_lista_rodo);
      break;

    case 'select_podzial':
      const temp_lista_podzial = document.getElementById('section_podzial-tmp').content;
      createSelectionFeature(temp_lista_podzial);
      break;
  };
}

function createSelectionFeature(temp){
  let template = document.importNode(temp, true);
  var uniqueID = uniqueId();
  var uniqueID_icons = uniqueId();
  const mainNode = template.querySelector(".section");
  const iconsButton = template.querySelector(".section-icon-btn");
  mainNode.id = uniqueID;
  iconsButton.id = uniqueID_icons;
  tippy(iconsButton, iconsTippyConstructor);
  sortableList.appendChild(template);
}

// Icons selection button
var hoveredButton;

function iconsButtonClick(object){
  const iconButton = document.getElementById(hoveredButton);
  iconButton.innerHTML = `<span class="material-symbols-outlined">${object.innerHTML}</span>`;
}

function hoverOnIconButton(id){
  hoveredButton = id;
}

// Delete section button
function deleteSection(section){
  var parentId = section.parentNode.parentNode.id;
  const toDelete = document.getElementById(parentId);
  sortableList.removeChild(toDelete);
}

// ID Generator
function uniqueId(){
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

// Informacje podstawowe - add button
const podstawoweAddButton = document.getElementById('podstawowe_add_btn');
const podstawoweList = document.querySelector('.podstawowe-prawo');
podstawoweAddButton.addEventListener('click', ()=>{
  const temp = document.getElementById('podstawowe-input-tmp').content;
  let template = document.importNode(temp, true);
  let uniqueID = uniqueId();
  template.querySelector('.podstawowe-input-box').id = uniqueID;
  podstawoweAddButton.before(template);
})

function deletePodstawowe(element){
  let toDelete = document.getElementById(element.parentNode.id);
  podstawoweList.removeChild(toDelete);
}

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

