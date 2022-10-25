import bingIcon from '../assets/icon/bing.svg';
import baiduIcon from '../assets/icon/baidu.svg';
import bilibiliIcon from '../assets/icon/bilibili.svg';
import googleIcon from '../assets/icon/google.svg';
import githubIcon from '../assets/icon/github.svg';
import gitlabIcon from '../assets/icon/gitlab.svg';
import gmailIcon from '../assets/icon/gmail.svg';
import { Schedule } from '../components/Schedule';


const searchEngines = [
    {
        id: 'bing',
        name: '必应',
        icon: bingIcon,
        href: 'https://www.bing.com/search?q=',
    },
    {
        id: 'baidu',
        name: '百度',
        icon: baiduIcon,
        href: 'https://www.baidu.com/s?wd=',
    },
    {
        id: 'bilibili',
        name: '哔哩哔哩',
        icon: bilibiliIcon,
        href: 'https://search.bilibili.com/all?keyword=',
    },
    {
        id: 'google',
        name: '谷歌',
        icon: googleIcon,
        href: 'https://www.google.com/search?q=',
    }
];

const dockItems = [
    {
        id: 'github',
        name: 'github',
        icon: githubIcon,
        component: <Schedule></Schedule>,
    },
    {
        id: 'gitlab',
        name: 'gitlab',
        icon: gitlabIcon,
        component: null,
    },
    {
        id: 'gmail',
        name: 'gmail',
        icon: gmailIcon,
        component: null,
    },
]

export { searchEngines, dockItems };