import marked from 'react-marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  smartLists: true,
  smartypants: false
});

const renderer = new marked.Renderer();

renderer.table = (header, body) => {
  return `
    <table class="mdl-data-table mdl-js-data-table">
      ${header}
      ${body}
    </table>
  `;
};

export {
  renderer,
  marked
};
