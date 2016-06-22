import React from 'react';
import {CLTooltip} from './tooltip.jsx';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';
import YouTubePlayer from 'youtube-player';
import random from 'random-js';

/**
 * Adds a CLVideoPlayer component that embde
 * @param {string} [addClasses] Adds optional classes.
 * @param {Object} [data] This is data that gets preloaded to the form. THis is helpful for when a user is updating and the form should already be populated.
 * @param {string} [id]
 * @param {Number} [shadow=0] Adds shadow to the form border. The only valid inputs are 0, 2, 3, 4, 8, and 16. See [Elevation and shadows](https://material.google.com/what-is-material/elevation-shadows.html) in the Google Material Design Spec.
 *
 */

export class CLVideoPlayer extends React.Component {

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

  componentDidMount() {
    const {
      id,
      videoId
    } = this.props;

    window.player = YouTubePlayer(id, {
      videoId,
      playerVars: {
        controls: 0,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,
        disablekb: 1
      }
    });
  }
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `video-player-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params
      videoId
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-video-player`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'video-player'),
      specificClassName
    );

   // Styles

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style
    };

    // Functions

    // Render return

    return (
      <div {...attributes}></div>
    );
  }
}
