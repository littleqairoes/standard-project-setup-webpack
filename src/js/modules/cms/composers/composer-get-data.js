export const composerGetData = ({id}, onData) => {
  // pagkuha ng data
  console.log(id)
  if (id === 'alec') {
    onData(null, {data: {
      title: 'Alec',
      body: 'Everybody is good'
    }});
  } else if (id === 'gauven') {
    onData(null, {data: {
      title: 'Gauven',
      body: 'Breaking bad is good'
    }});
  } else if (id === 'zydrick') {
    onData(null, {data: {
      title: 'Zydrick',
      body: 'Assassin\'s Creed minerva'
    }});
  } else {
    onData(null, {data: {
      title: 'WAAHAHAHAHAHAH',
      body: 'Break!'
    }});
  }
};

