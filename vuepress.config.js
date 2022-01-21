module.exports = {
    title: "pakupaku",
    description: "飲食サービスアプリ",
    themeConfig: {
        logo: "/image/pakupaku_icon.png",
        navbar: [
            // NavbarItem
            {
                text: "HOME",
                link: "/",
            },
            {
                text: "利用規約",
                link: "/terms-of-service/",
            },
            {
                text: "プライバシー",
                link: "/privacy-policy/",
            },
        ],
    },
    base: "/pakupaku.official/",
    dest: "docs",
};
