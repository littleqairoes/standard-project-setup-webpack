export default {
  onChangeUpdateArticle: ({mainStore}, data) => {
    console.log('articl', data);
    mainStore.dispatch({
      type: 'UPDATE_ARTICLE',
      key: data.id,
      data
    });
  }
};
