const itemId = 1;

/** @type {HTMLFormElement} */
const addForm = document.getElementById("addForm");

addForm.addEventListener("submit", ev => {
  ev.preventDefault();

  const title = addForm['title'].value;
  const amount = Number(addForm['amount'].value);
  const current = 0;
  // console.log({ title, amount });

  const tr = document.createElement('tr');

  {
    const td = document.createElement('td');
    td.dataset['prop'] = 'title'
    td.textContent = title;
    tr.appendChild(td);
  }

  {
    const td = document.createElement('td');
    td.dataset['prop'] = 'progress'
    
    const progress = document.createElement('progress');
    progress.value = current;
    progress.max = amount;

    td.appendChild(progress);
    tr.appendChild(td);
  }

  {
    const td = document.createElement('td');
    const addButton = document.createElement('button');
    addButton.textContent = "+";
    addButton.addEventListener('click', () => {
      const progressTd = tr.querySelector('[data-prop=progress]');
      const [progress] = progressTd.getElementsByTagName('progress');
      progress.value++;
    });
    td.appendChild(addButton);
    tr.appendChild(td);
  }

  listTable.appendChild(tr);
});

/** @type {HTMLTableElement} */
const listTable = document.getElementById("listTable");