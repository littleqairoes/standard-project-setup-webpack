import React from 'react';
import {CLTooltip} from './tooltip.jsx';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';
import YouTubePlayer from 'youtube-player';
import random from 'random-js';

export class CLVideoPlayer extends React.Component {
<<<<<<< 31a3630d792005311f348620f99d063d7d8d49b7
  constructor() {
    super();
    this.playVideo = this.playVideo.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
    this.stopVideo = this.stopVideo.bind(this);
    this.seekTo = this.seekTo.bind(this);
  }
  playVideo() {
    window.player.playVideo();
  }
  pauseVideo() {
    window.player.pauseVideo();
  }
  stopVideo() {
    window.player.stopVideo();
  }
  seekTo(seconds, allowSeekAhead) {
    window.player.seekTo(seconds, allowSeekAhead);
  }
=======
>>>>>>> Create CLVideoPlayer component
  componentDidMount() {
    const {
      id,
      videoId
    } = this.props;
<<<<<<< 31a3630d792005311f348620f99d063d7d8d49b7
    window.player = YouTubePlayer(id, {
      videoId,
      playerVars: {
        controls: 0,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,
        disablekb: 1
      }
=======
    let player = YouTubePlayer(id, {
      videoId
>>>>>>> Create CLVideoPlayer component
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
