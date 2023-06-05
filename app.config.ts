const Provinces = [
    {
        key: '1',
        title: 'آذربایجان شرقی',
    },
    {
        key: '2',
        title: 'آذربایجان غربی',
    },
    {
        key: '3',
        title: 'اردبیل',
    },
    {
        key: '4',
        title: 'اصفهان',
    },
    {
        key: '5',
        title: 'البرز',
    },
    {
        key: '6',
        title: 'ایلام',
    },
    {
        key: '7',
        title: 'بوشهر',
    },
    {
        key: '8',
        title: 'تهران',
    },
    {
        key: '9',
        title: 'چهارمحال و بختیاری',
    },
];

import fa from './lang/fa.json'
import en from './lang/en.json'

const messages = {fa, en}

export default defineAppConfig({
    fetchOptions: {
        baseURL: 'https://storeino.devdot.ir/api',
        headers: {
            Accept: 'application/json',
            'Cache-Control': 'no-cache'
        }
    },
    digimarket: {
        lang: 'fa',
        rtl: true,
        title: 'shop_title',
        profileMenuItems: [
            {icon: 'fa fa-plus', text: 'پلاس اکانت', svg: 'plus', link: '/profile/plus'},
            {icon: 'fa fa-list', text: 'خلاصه فعالیت‌ها', svg: 'list', link: '/profile/activity'},
            {icon: 'fa fa-list', text: 'سفارش‌ها', svg: 'order', link: '/profile/orders'},
        ],
        divisions: [
            {
                key: '1',
                title: 'Asia',
                items: [{
                    key: "1",
                    title: "Iran",
                    items: Provinces
                }]
            }
        ],
        messages
    }
})