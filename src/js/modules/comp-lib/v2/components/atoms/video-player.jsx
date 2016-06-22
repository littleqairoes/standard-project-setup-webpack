import React from 'react';
import {CLTooltip} from './tooltip.jsx';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';
import YouTubePlayer from 'youtube-player';
import random from 'random-js';

export class CLVideoPlayer extends React.Component {
  componentDidMount() {
    const {
      id,
      videoId
    } = this.props;
    let player = YouTubePlayer(id, {
      videoId
    });
  }
  render() {
    const r = random();
    const {
      addClasses,
      classes,
      id = r.string(5),
      videoId
    } = this.props;
    const attributes = {
      id
    };
    return (
      <div {...attributes}></div>
    );
  }
}
