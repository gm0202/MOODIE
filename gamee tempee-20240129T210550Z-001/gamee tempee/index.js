const entryForm = document.querySelector(`#entryForm`);
const entryResultRow = document.querySelector(`.history`);
const getEntryTitle = document.getElementsByClassName(`entry-title`);
const getEntryText = document.getElementsByClassName(`entry-box`);

function addEntry(x) {
  x.preventDefault();
  const d = new Date();
  const month = new Array("january","February","March","April","May","June","July","August","September","October","November","December");
  const n = month[d.getMonth()];
  const day = d.getDate();
  const year = d.getFullYear();

  const entryDiv = document.createElement(`div`);
  entryDiv.className = `single-entry-div`;
  entryResultRow.appendChild(entryDiv);

  const entryHeading = document.createElement(`h3`);
  entryHeading.className = `single-entry-heading`;
  entryHeading.textContent = getEntryTitle[0].value;
  entryDiv.appendChild(entryHeading);

  const entryDate = document.createElement(`p`);
  entryDate.className = `single-entry-date`;
  entryDate.textContent = `Date Added: ${day} ${n} ${year}`;
  entryDiv.appendChild(entryDate);

  const entryParagraph = document.createElement(`p`);
  entryParagraph.className = `single-entry-text`;
  entryParagraph.textContent = getEntryText[0].value;
  entryDiv.appendChild(entryParagraph);
  getEntryText[0].value = ``;
}
entryForm.addEventListener(`submit`, addEntry);