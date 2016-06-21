/**
 * Site global JS, should be included everywhere
 */
(function() {
  let modalTriggers = document.getElementsByClassName('modal-trigger');
  let modalClosers = document.getElementsByClassName('modal-close');

  function handleModalTriggerClick(e) {
    e.preventDefault();

    let modalID = e.currentTarget.getAttribute('data-modal-name');
    document.getElementById('modal-' + modalID).style.display = 'block';
  }

  function handleModalClose(e) {
    e.preventDefault();

    let modals = document.querySelectorAll('.modal');
    for (var i = 0; i < modals.length; i++) {
      modals[i].style.display = 'none';
    }
  }

  for (var i = 0; i < modalTriggers.length; i++) {
    modalTriggers[i].addEventListener('click', handleModalTriggerClick);
  }

  for (var i = 0; i < modalClosers.length; i++) {
    modalClosers[i].addEventListener('click', handleModalClose);
  }
}());
