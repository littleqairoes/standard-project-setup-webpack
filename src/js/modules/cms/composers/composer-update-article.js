export const composerUpdateArticle = ({context, id = 'id1'}, onData) => {
  const {mainStore} = context();
  onData(null, {});
  return mainStore.subscribe(() => {
    const {article} = mainStore.getState();

    const {title, body} = article[id];
    onData(null, {title, body});
  });
};
