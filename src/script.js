const linkFeat = document.getElementsByClassName('arrow')[0];
const linkComp = document.getElementsByClassName('arrow')[1];
const menuFeat = document.querySelector('.menu-feat');
const menuComp = document.querySelector('.menu-comp');

const menuOnCLick = {
  linkFeat: linkFeat.addEventListener('click', () => {
    if (checkIsOpen.feat()) {
      hideMenus.feat();
    } else {
      showMenus.feat();
    };
  }),
  linkComp: linkComp.addEventListener('click', () => {
    if (checkIsOpen.comp()) {
      hideMenus.comp();
    } else {
      showMenus.comp();
    };
  }),
}
const checkIsOpen = {
  feat: function featIsOpen() {
    if (menuFeat.classList.contains('open')) {
      return true;
    } else {
      return false;
    }
  },
  comp: function compIsOpen() {
    if (menuComp.classList.contains('open')) {
      return true;
    } else {
      return false;
    }
  },
};
const hideMenus = {
  feat: function hideFeatMenu() {
    menuFeat.classList.remove('open');
    menuFeat.classList.add('hide');
  },
  comp: function hideCompMenu() {
    menuComp.classList.remove('open');
    menuComp.classList.add('hide');
  },
};
const showMenus = {
  feat: function showFeatMenu() {
    menuFeat.classList.add('open');
    menuFeat.classList.remove('hide');
  },
  comp: function showCompMenu() {
    menuComp.classList.add('open');
    menuComp.classList.remove('hide');
  }
};