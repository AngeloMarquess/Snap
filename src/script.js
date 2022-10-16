const linkFeat = document.getElementsByClassName('arrow')[0];
const linkComp = document.getElementsByClassName('arrow')[1];
const menuFeat = document.querySelector('.menu-feat');
const menuComp = document.querySelector('.menu-comp');

function featIsOpen() {
  if (menuFeat.classList.contains('open')) {
    return true;
  } else {
    return false;
  }
};

function compIsOpen() {
  if (menuComp.classList.contains('open')) {
    return true;
  } else {
    return false;
  }
};

linkFeat.addEventListener('click', () => {
  if (featIsOpen()) {
    hideFeatMenu();
  } else {
    showFeatMenu();
  };
});

linkComp.addEventListener('click', () => {
  if (compIsOpen()) {
    hideCompMenu();
  } else {
    showCompMenu();
  };
});

function hideCompMenu() {
  menuComp.classList.remove('open');
  menuComp.classList.add('hide');
};

function showCompMenu() {
  menuComp.classList.add('open');
  menuComp.classList.remove('hide');
};

function hideFeatMenu() {
  menuFeat.classList.remove('open');
  menuFeat.classList.add('hide');
};

function showFeatMenu() {
  menuFeat.classList.add('open');
  menuFeat.classList.remove('hide');
};