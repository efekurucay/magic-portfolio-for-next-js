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

  return (
    <div className={styles.container}>
      {song && song.isPlaying ? (
        <SmartLink href={song.songUrl} className={styles.link}>
          <Flex gap="m" vertical="center">
            {song.albumImageUrl && (
              <SmartImage src={song.albumImageUrl} alt={song.album} width={64} height={64} className={styles.albumImage} />
            )}
            <Flex direction="column">
              <Text variant="body-strong-m" onBackground="neutral-strong">
                {song.title}
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {song.artist}
              </Text>
            </Flex>
          </Flex>
        </SmartLink>
      ) : (
        <Flex gap="m" vertical="center">
          <Icon name="spotify" size="l" /> 
          <Text variant="body-default-m" onBackground="neutral-weak">
            Not currently playing
          </Text>
        </Flex>
      )}
    </div>
  );
};

export default NowPlaying; 