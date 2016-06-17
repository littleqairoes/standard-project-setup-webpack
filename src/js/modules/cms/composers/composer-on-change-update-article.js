export const composerOnChangeUpdateArticle = ({actions, id = 'id1', data}, onData) => {
  const {article} = actions();
  const {onChangeUpdateArticle} = article;
  const newFunction = (d) => {
    d.id = id;
    onChangeUpdateArticle(d);
  };
  onData(null, {onChangeDispatch: newFunction, data, id});
};

export const injectOnChange = (context, actions) => ({
  onChangeDispatch: actions.article.onChangeUpdateArticle,
  context: () => (context)
});
