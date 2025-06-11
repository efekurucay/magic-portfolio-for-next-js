'use client';

import { useEffect, useState } from 'react';
import { Flex, Text, SmartLink, Icon, SmartImage } from '@/once-ui/components';
import styles from './SpotifyNowPlaying.module.scss';

type Song = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
};

const Equalizer = () => (
  <div className={styles.equalizer}>
    <span />
    <span />
    <span />
    <span />
  </div>
);

const NowPlaying = () => {
  const [song, setSong] = useState<Song | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/now-playing');
        if (response.ok) {
          const data = await response.json();
          setSong(data);
        } else {
          setSong({ isPlaying: false });
        }
      } catch (error) {
        setSong({ isPlaying: false });
        console.error('Error fetching now playing track:', error);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000); // Poll every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (!song) {
    return (
       <div className={styles.container}>
        <Flex gap="m" vertical="center">
          <Icon name="spotify" size="l" onBackground="neutral-weak" />
          <Text variant="body-default-m" onBackground="neutral-weak">
            Loading Spotify data...
          </Text>
        </Flex>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <Icon name="spotify" size="l" className={styles.spotifyIcon} />
      {song.isPlaying ? (
        <SmartLink href={song.songUrl} className={styles.link} target="_blank" rel="noopener noreferrer">
          <div className={styles.container}>
            {song.albumImageUrl && (
              <img src={song.albumImageUrl} alt={song.album} className={styles.albumImage} />
            )}
            <div className={styles.songInfo}>
              <Text variant="body-strong-m" onBackground="neutral-strong" className={styles.truncate}>
                {song.title}
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak" className={styles.truncate}>
                {song.artist}
              </Text>
            </div>
            <Equalizer />
          </div>
        </SmartLink>
      ) : (
        <div className={styles.container}>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Not currently playing
          </Text>
        </div>
      )}
    </div>
  );
};

export default NowPlaying; 