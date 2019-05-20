module.exports = {
  title: "Ali's Notes",
  description: "My notes for classes I try not to sleep in",
  ga: "UA-133545986-4",
  dest: "dist",
  head: [
    ['link', { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.8.2/css/all.css" }],
    ['link', { rel: 'icon', href: '/media/icon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'og:title', content: "Ali's notes" }],
    ['meta', { name: 'og:description', content: 'My not-so-hidden stash of notes' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:url', content: 'https://notes.hifumi.io' }],
    ['meta', { name: 'og:locale', content: 'en_US' }],
  ],
  theme: 'yuu',
  serviceWorker: true,
  themeConfig: {
    serviceWorker: {
        updatePopup: true
    },
    repo: "xetera/notes",
    repoLabel: "Add your own notes!",
    editLinks: true,
    lastUpdated: true,
    yuu: {
      colorThemes: ['red', 'blue']
    },
    nav: [{
      text: "Home",
      link: "/"
    }, {
      text: "About me",
      link: "/about_me"
    }, {
      text: "My GitHub",
      link: "https://github.com/xetera"
    }],
    sidebarDepth: 6,
    sidebar: {
      '/american_gov/': [{
        title: "American Government",
        collapsable: false,
        children: [
          ['/', 'Go back home'],
          ["/american_gov/", "Introduction"]
        ]
      }, {
        title: "Relevant Chapters",
        collapsable: false,
        children: [
          '/american_gov/chapter4',
          '/american_gov/chapter5-6',
          '/american_gov/chapter14',
          '/american_gov/chapter16',
        ]
      }, {
        title: "Old Chapters",
        collapsable: true,
        children: [
          '/american_gov/chapter1',
          '/american_gov/chapter2',
          '/american_gov/chapter3',
        ]
      }]
    },
    '/': [{
      title: "Home",
      collapsable: false,
      children: [
        ['/', "Welcome"],
        ['/site_tutorial/getting_started', 'How do I make a site like this'],
      ]
    }, {
      title: "Notes",
      collapsable: false,
      children: [
        '/american_gov/',
      ]
    }],
  },
};
