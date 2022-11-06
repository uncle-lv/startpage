import bingIcon from '../assets/icon/bing.svg';
import baiduIcon from '../assets/icon/baidu.svg';
import bilibiliIcon from '../assets/icon/bilibili.svg';
import compassIcon from '../assets/icon/compass.svg';
import calendarIcon from '../assets/icon/calendar.svg';
import videoIcon from '../assets/icon/video.svg';
import googleIcon from '../assets/icon/google.svg';
import gitlabIcon from '../assets/icon/gitlab.svg';
import gmailIcon from '../assets/icon/gmail.svg';
import { Schedule } from '../components/Schedule';


const searchEngines = [
  {
    id: "bing",
    suggest_id: 2,
    name: "必应",
    icon: bingIcon,
    href: "https://www.bing.com/search?q=",
  },
  {
    id: "baidu",
    suggest_id: 0,
    name: "百度",
    icon: baiduIcon,
    href: "https://www.baidu.com/s?wd=",
  },
  {
    id: "bilibili",
    suggest_id: 1,
    name: "哔哩哔哩",
    icon: bilibiliIcon,
    href: "https://search.bilibili.com/all?keyword=",
  },
  {
    id: "google",
    suggest_id: 2,
    name: "谷歌",
    icon: googleIcon,
    href: "https://www.google.com/search?q=",
  },
];

const dockItems = [
    {
        id: 'compass',
        name: '网址导航',
        icon: compassIcon,
        component: <Schedule></Schedule>,
    },
    {
        id: 'calendar',
        name: '日程表',
        icon: calendarIcon,
        component: <Schedule></Schedule>,
    },
    {
        id: 'video',
        name: '最近视频',
        icon: videoIcon,
        component: null,
    },
]

export { searchEngines, dockItems };
