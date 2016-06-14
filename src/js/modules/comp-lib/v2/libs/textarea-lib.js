// http://stackoverflow.com/questions/3286595/
// update-textarea-value-but-keep-cursor-position/3288215#3288215
// http://stackoverflow.com/questions/3964710/replacing-selected-text-in-the-textarea

export const getInputSelection = (el) => {
  let start = 0;
  let end = 0;
  let normalizedValue;
  let range;
  let textInputRange;
  let len;
  let endRange;

  if (typeof el.selectionStart === 'number' && typeof el.selectionEnd === 'number') {
    start = el.selectionStart;
    end = el.selectionEnd;
  } else {
    range = document.selection.createRange();

    if (range && range.parentElement() === el) {
      len = el.value.length;
      normalizedValue = el.value.replace(/\r\n/g, '\n');

      // Create a working TextRange that lives only in the input
      textInputRange = el.createTextRange();
      textInputRange.moveToBookmark(range.getBookmark());

      // Check if the start and end of the selection are at the very end
      // of the input, since moveStart/moveEnd doesn't return what we want
      // in those cases
      endRange = el.createTextRange();
      endRange.collapse(false);

      if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
        start = end = len;
      } else {
        start = -textInputRange.moveStart('character', -len);
        start += normalizedValue.slice(0, start).split('\n').length - 1;

        if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
          end = len;
        } else {
          end = -textInputRange.moveEnd('character', -len);
          end += normalizedValue.slice(0, end).split('\n').length - 1;
        }
      }
    }
  }

  return { start, end };
};

export const offsetToRangeCharacterMove = (el, offset) => {
  return offset - (el.value.slice(0, offset).split('\r\n').length - 1);
};

export const setInputSelection = (el, startOffset, endOffset) => {
  if (typeof el.selectionStart === 'number' && typeof el.selectionEnd === 'number') {
    el.selectionStart = startOffset;
    el.selectionEnd = endOffset;
  } else {
    const range = el.createTextRange();
    const startCharMove = offsetToRangeCharacterMove(el, startOffset);
    range.collapse(true);
    if (startOffset === endOffset) {
      range.move('character', startCharMove);
    } else {
      range.moveEnd('character', offsetToRangeCharacterMove(el, endOffset));
      range.moveStart('character', startCharMove);
    }
    range.select();
  }
};

export const extractSelectedText = (el) => {
  const sel = getInputSelection(el);
  const val = el.value;
  return val.slice(sel.start, sel.end - sel.start);
};

export const replaceSelectedText = (el, text) => {
  const sel = getInputSelection(el);
  const val = el.value;
  let newText = sel.start > 0 && val.slice(sel.start - 1)[0] !== ' ' ? ` ${text}` : text;
  newText = sel.end < val.length - 1 && val.slice(sel.end)[0] !== ' ' ? `${newText} ` : newText;
  el.value = val.slice(0, sel.start) + newText + val.slice(sel.end);
};

export const bold = (el) => {
  const text = extractSelectedText(el);
  console.log(el)
  console.lot(text)
  if (text === '') {
    replaceSelectedText(el, '**strong text**');
  } else {
    const replacetext = /\*\*(\s|\S)*\*\*/.test(text.trim()) ?
      text.slice(2, text.length - 2) : `**${text}**`;
    replaceSelectedText(el, replacetext);
  }
};

export const italics = (el) => {
  const text = extractSelectedText(el);
  if (text === '') {
    replaceSelectedText(el, '_italicized text_');
  } else {
    const replacetext = /_(\s|\S)*_/.test(text.trim()) ?
      text.slice(1, text.length - 1) : `_${text}_`;
    replaceSelectedText(el, replacetext);
  }
};

export const insertLink = (el, link = 'enter link here') => {
  const text = extractSelectedText(el);
  const replacetext = text === '' ? `[enter link description here](${link})` : `[${text}](${link})`;
  replaceSelectedText(el, replacetext);
};

export const insertPhoto = (el, img = 'enter photo source here') => {
  // const text = extractSelectedText(el);
  const replacetext = `<img src="${img}" width="100%" />`;
  replaceSelectedText(el, replacetext);
};

export const blockquote = (el) => {
  const text = extractSelectedText(el);
  if (text !== '') {
    const replacetext = /> (\s|\S)+/.test(text.trim()) ?
      text.slice(1, text.length) : `> ${text}`;
    replaceSelectedText(el, replacetext);
  }
};

export const preformated = (el) => {
  const text = extractSelectedText(el);
  if (text === '') {
    replaceSelectedText(el, '`preformated text`');
  } else {
    const replacetext = /`(\s|\S)*`/.test(text.trim()) ?
      text.slice(1, text.length - 1) : `\`${text}\``;
    replaceSelectedText(el, replacetext);
  }
};

export const bulletItem = (el) => {
  const text = extractSelectedText(el);
  if (text === '') {
    replaceSelectedText(el, '\n* List Item');
  } else {
    const replacetext = /`\* (\s|\S)+`/.test(text.trim()) ?
      text.slice(2, text.length) : `* ${text}`;
    replaceSelectedText(el, replacetext);
  }
};

export const numberItem = (el) => {
  const text = extractSelectedText(el);
  if (text === '') {
    replaceSelectedText(el, '\n1. List Item');
  } else {
    const replacetext = /`(\d)+\. (\s|\S)+`/.test(text.trim()) ?
      text.slice(3, text.length) : `1. ${text}`;
    replaceSelectedText(el, replacetext);
  }
};

export const headerText = (el) => {
  const text = extractSelectedText(el);
  if (text === '') {
    replaceSelectedText(el, '\n## Header Text');
  } else {
    const replacetext = /`(\d)+\. (\s|\S)+`/.test(text.trim()) ?
      text.slice(3, text.length) : `## ${text}`;
    replaceSelectedText(el, replacetext);
  }
};
