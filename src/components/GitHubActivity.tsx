'use client';

import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Flex, Text, SmartLink, Icon, Skeleton } from '@/once-ui/components';
import styles from './GitHubActivity.module.scss';
import { formatDistanceToNow } from 'date-fns';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Aktivite türüne göre ikon ve metin döndüren yardımcı fonksiyon
const getActivityDetails = (activity: any) => {
  if (!activity) return { icon: 'github', text: 'Fetching latest activity...' };

  switch (activity.type) {
    case 'commit':
      return {
        icon: 'gitCommit',
        text: (
          <>
            Committed to <SmartLink href={activity.repoUrl} className={styles.link}>{activity.repo}</SmartLink>
          </>
        ),
        message: activity.message,
      };
    case 'Create':
      return {
        icon: 'plus',
        text: (
          <>
            Created a new repository <SmartLink href={activity.repoUrl} className={styles.link}>{activity.repo}</SmartLink>
          </>
        ),
      };
    case 'Issues':
      return {
        icon: 'issueOpened',
        text: (
           <>
            Opened an issue in <SmartLink href={activity.repoUrl} className={styles.link}>{activity.repo}</SmartLink>
          </>
        )
      }
    default:
      return {
        icon: 'star',
        text: (
          <>
            Starred a repository <SmartLink href={activity.repoUrl} className={styles.link}>{activity.repo}</SmartLink>
          </>
        ),
      };
  }
};

const GitHubActivity = () => {
  const { data: activity, error } = useSWR('/api/github', fetcher, {
    refreshInterval: 60000, // 60 saniyede bir yeniden çek
  });

  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    if (activity?.createdAt) {
      setTimeAgo(formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true }));
      const interval = setInterval(() => {
        setTimeAgo(formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true }));
      }, 60000);
      return () => clearInterval(interval);
    }
  }, [activity]);


  if (error) {
    return (
      <div className={styles.container}>
        <Icon name="github" size="l" onBackground="neutral-weak"/>
        <Text onBackground="neutral-weak">Could not load GitHub activity.</Text>
      </div>
    );
  }

  if (!activity) {
    return (
      <div className={styles.container}>
        <Skeleton shape="block" style={{ width: '100%', height: '48px', borderRadius: 'var(--radius-m)' }} />
      </div>
    )
  }

  const { icon, text, message } = getActivityDetails(activity);

  return (
    <div className={styles.container}>
      <Icon name={icon} size="l" onBackground="neutral-weak" className={styles.icon}/>
      <div className={styles.activityInfo}>
        <div className={styles.mainText}>{text}</div>
        {message && <div className={styles.message}>{message}</div>}
        <div className={styles.time}>{timeAgo}</div>
      </div>
    </div>
  );
};

export default GitHubActivity; 