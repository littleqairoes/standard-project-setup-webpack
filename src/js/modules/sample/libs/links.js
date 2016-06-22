import * as Atoms from './../components/atoms';
import * as Molecules from './../components/molecules';
import * as Organisms from './../components/organisms';
import * as Templates from './../components/templates';
import * as Pages from './../components/pages';

const atomLinks = {
  name: 'Atoms',
  links: [ {
    name: 'Atoms',
    url: '/Atoms'
  } ]
};

const moleculeLinks = {
  name: 'Molecules',
  links: [ {
    name: 'Molecules',
    url: '/Molecules'
  } ]
};

const organismLinks = {
  name: 'Organisms',
  links: [ {
    name: 'Organisms',
    url: '/Organisms'
  } ]
};

const templateLinks = {
  name: 'Templates',
  links: [ {
    name: 'Templates',
    url: '/Templates'
  } ]
};
const pageLinks = {
  name: 'Pages',
  links: [ {
    name: 'Pages',
    url: '/Pages'
  } ]
};

for (let i in Atoms) {
  if (Atoms[i]) {
    atomLinks.links.push({
      url: `/Atoms/${i}`,
      name: i.replace('Demo', '')
    });
  }
}

for (let i in Molecules) {
  if (Molecules[i]) {
    moleculeLinks.links.push({
      url: `/Molecules/${i}`,
      name: i.replace('Demo', '')
    });
  }
}

for (let i in Organisms) {
  if (Organisms[i]) {
    organismLinks.links.push({
      url: `/Organisms/${i}`,
      name: i.replace('Demo', '')
    });
  }
}

for (let i in Templates) {
  if (Templates[i]) {
    templateLinks.links.push({
      url: `/Templates/${i}`,
      name: i.replace('Demo', '')
    });
  }
}

for (let i in Pages) {
  if (Pages[i]) {
    pageLinks.links.push({
      url: `/Pages/${i}`,
      name: i.replace('Demo', '')
    });
  }
}

export const headerLinks = [
  atomLinks,
  moleculeLinks,
  organismLinks,
  templateLinks,
  pageLinks
];
