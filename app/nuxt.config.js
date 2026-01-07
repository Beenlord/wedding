export default {
    server: {
        host: process.env.HOST,
        port: process.env.PORT,
    },
    head: {
        title: 'Приглашение на свадьбу Эммы и Вовы',
        htmlAttrs: {
            lang: 'ru',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'msapplication-TileColor', content: '#fafafa' },
            { name: 'theme-color', content: '#fafafa' },
        ],
        link: [],
    },
    css: [
        'reset-css/reset.css',
        '@/assets/css/main.css',
        '@/assets/css/fonts.css',
    ],
    components: true,
};
