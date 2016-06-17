export const composerOnChangeUpdateArticle = ({actions}, onData) => {
  const {article} = actions();
  const {onChangeUpdateArticle} = article;
  onData(null, {onChangeDispatch: onChangeUpdateArticle});
};
