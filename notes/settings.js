/**
 * All configuration settings can be found in
 * https://docsify.now.sh/configuration
 */
window.$docsify = {
  /**
   * Your website's name (change this)
   */
  name: "Ali's Notes! 📝",
  /**
   * link to your github repo (change or remove this)
   */
  repo: 'https://github.com/xetera/notes',
  /**
   * directories that allows searching (change this)
   * 
   * Add single file: /directory/my_file.md
   * Add entire folder: /directory/*
   */
  search: ["/american_gov/*"],
  /**
   * Alert customizations
   * 
   * see: https://github.com/zanfab/docsify-plugin-flexible-alerts
   */
  'flexible-alerts': {
    style: "callout",
    danger: {
      style: "flat",
      label: "Important",
      icon: "fas fa-star"
    },
    comment: {
      label: "Lecture",
      icon: "fas fa-comment"
    }
  },
  /**
   * Show sidebar?
   */
  loadSidebar: true,
  /**
   * Depth of sidebar segments
   */
  subMaxLevel: 8
}