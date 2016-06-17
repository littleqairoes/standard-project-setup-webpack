export const composerUpdateArticle = ({context, id}, onData) => {
  const {mainStore} = context();
  onData(null, {});;
  return mainStore.subscribe(() => {
    const {article: a} = mainStore.getState();
    console.log(a);
    const {title, body} = a['this-article'];
    onData(null, {title, body});
  });
};
