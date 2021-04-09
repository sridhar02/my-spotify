import React from 'react';

import styles from './TrackSearchResult.module.css';

export default function TrackSearchResult({ track, chooseTrack }) {
  const handlePlay = () => {
    chooseTrack(track);
  };

  return (
    <div className={styles.container} onClick={handlePlay}>
      <img className={styles.trackImage} src={track.albumUrl} />
      <div className={styles.title}>
        <div>{track.title}</div>
        <div>{track.artist}</div>
      </div>
    </div>
  );
}
