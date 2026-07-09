import { SiTwitch, SiKick, SiYoutube, SiTiktok } from 'react-icons/si';

export function TwitchIcon({ className = 'w-5 h-5' }) {
  return <SiTwitch className={className} aria-hidden />;
}

export function KickIcon({ className = 'w-5 h-5' }) {
  return <SiKick className={className} aria-hidden />;
}

export function YouTubeIcon({ className = 'w-5 h-5' }) {
  return <SiYoutube className={className} aria-hidden />;
}

export function TikTokIcon({ className = 'w-5 h-5' }) {
  return <SiTiktok className={className} aria-hidden />;
}

export const platformList = [
  {
    name: 'Twitch',
    color: '#9146FF',
    bg: 'rgba(145,70,255,0.1)',
    border: 'rgba(145,70,255,0.25)',
    Icon: TwitchIcon,
  },
  {
    name: 'Kick',
    color: '#FFFFFF',
    bg: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.18)',
    Icon: KickIcon,
  },
  {
    name: 'YouTube',
    color: '#FF0000',
    bg: 'rgba(255,0,0,0.08)',
    border: 'rgba(255,0,0,0.22)',
    Icon: YouTubeIcon,
  },
  {
    name: 'TikTok',
    color: '#EE1D52',
    bg: 'rgba(238,29,82,0.08)',
    border: 'rgba(238,29,82,0.22)',
    Icon: TikTokIcon,
  },
];
