const GITHUB_USERNAME = 'efekurucay'; // <-- Buraya kendi GitHub kullanıcı adınızı yazın
const LATEST_ACTIVITY_ENDPOINT = `https://api.github.com/users/${GITHUB_USERNAME}/events/public`;

export const getLatestActivity = async () => {
  try {
    const response = await fetch(LATEST_ACTIVITY_ENDPOINT, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        // Gerekirse buraya bir GitHub Personal Access Token ekleyebilirsiniz
        // 'Authorization': `token ${process.env.GITHUB_TOKEN}`,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('Failed to fetch GitHub activity:', response.statusText);
      return null;
    }

    const events = await response.json();
    // En alakalı aktiviteyi bul (örn: PushEvent)
    const pushEvent = events.find((event: any) => event.type === 'PushEvent');

    if (pushEvent) {
      return {
        type: 'commit',
        repo: pushEvent.repo.name,
        repoUrl: `https://github.com/${pushEvent.repo.name}`,
        message: pushEvent.payload.commits[0].message,
        createdAt: pushEvent.created_at,
      };
    }
    
    // PushEvent yoksa, en son aktiviteyi döndür
    const latestEvent = events[0];
    if (latestEvent) {
       return {
        type: latestEvent.type.replace('Event', ''),
        repo: latestEvent.repo.name,
        repoUrl: `https://github.com/${latestEvent.repo.name}`,
        createdAt: latestEvent.created_at,
       }
    }

    return null;
  } catch (error) {
    console.error('Error in getLatestActivity:', error);
    return null;
  }
}; 