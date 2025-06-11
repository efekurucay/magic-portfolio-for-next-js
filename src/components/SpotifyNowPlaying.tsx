'use client';

import { useEffect, useState } from 'react';
import { Flex, Text, SmartLink, Icon } from '@/once-ui/components';
import styles from './SpotifyNowPlaying.module.scss';

type Song = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
};

const NowPlaying = () => {
  const [song, setSong] = useState<Song | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/now-playing', { cache: 'no-store' });
        if (response.ok) {
          const data = await response.json();
          if (data.title) {
            setSong(data);
          } else {
            setSong(null);
          }
        } else {
          setSong(null);
        }
      } catch (error) {
        setSong(null);
        console.error('Error fetching now playing track:', error);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 90000); // Poll every 90 seconds

    return () => clearInterval(interval);
  }, []);

  if (!song || (!song.isPlaying && !song.title)) {
    return (
       <div className={styles.container}>
        <Flex gap="m" vertical="center">
          <Icon name="spotify" size="l" onBackground="neutral-weak" />
          <Text variant="body-default-m" onBackground="neutral-weak">
            Loading Spotify...
          </Text>
        </Flex>
      </div>
    )
  }

  return (
    <SmartLink 
      href={song.songUrl} 
      className={styles.link} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div className={styles.container}>
        {song.albumImageUrl && (
          <img src={song.albumImageUrl} alt={song.album || 'Album Art'} className={styles.albumImage} />
        )}
        <div className={styles.songInfo}>
           <Flex as="div" vertical="center" gap="s">
            <Text as="p" variant="body-strong-m" onBackground="neutral-strong" className={styles.truncate}>
              {song.title}
            </Text>
            <Icon 
              name="spotify" 
              size="m" 
              onBackground="neutral-weak" 
              className={song.isPlaying ? styles.spotifyIconPlaying : styles.spotifyIcon}
            />
          </Flex>
          <Text as="p" variant="body-default-m" onBackground="neutral-weak" className={styles.truncate}>
            {song.artist}
          </Text>
        </div>
      </div>
    </SmartLink>
  );
};

export default NowPlaying; 