'use strict'

var fs = require('fs')
var yaml = require('js-yaml')
var paths = {
  modules: './node_modules/sircus-'
}

module.exports = {
  pkg: require('./package.json'),
  site: yaml.safeLoad(fs.readFileSync('./site.yml', 'utf8')),
  sircus: {
    pkg: require('sircus/package.json'),
    stats: require('./sircus.json'),
  },
  variables: {
    pkg: require(paths.modules + 'variables/package.json'),
    css: fs.readFileSync(paths.modules + 'variables/index.css', 'utf8')
  },
  elements: {
    pkg: require(paths.modules + 'elements/package.json'),
    css: fs.readFileSync(paths.modules + 'elements/index.css', 'utf8')
  },
  components: {
    button: {
      pkg: require(paths.modules + 'components-button/package.json'),
      css: fs.readFileSync(paths.modules + 'components-button/index.css', 'utf8'),
    },
    container: {
      pkg: require(paths.modules + 'components-container/package.json'),
      css: fs.readFileSync(paths.modules + 'components-container/index.css', 'utf8'),
    },
    flex: {
      pkg: require(paths.modules + 'components-flex/package.json'),
      css: fs.readFileSync(paths.modules + 'components-flex/index.css', 'utf8'),
    },
    container: {
      pkg: require(paths.modules + 'components-container/package.json'),
      css: fs.readFileSync(paths.modules + 'components-container/index.css', 'utf8'),
    },
    form: {
      pkg: require(paths.modules + 'components-form/package.json'),
      css: fs.readFileSync(paths.modules + 'components-form/index.css', 'utf8'),
    },
    fullembed: {
      pkg: require(paths.modules + 'components-fullembed/package.json'),
      css: fs.readFileSync(paths.modules + 'components-fullembed/index.css', 'utf8'),
    },
    grid: {
      pkg: require(paths.modules + 'components-grid/package.json'),
      css: fs.readFileSync(paths.modules + 'components-grid/index.css', 'utf8'),
    },
    list: {
      pkg: require(paths.modules + 'components-list/package.json'),
      css: fs.readFileSync(paths.modules + 'components-list/index.css', 'utf8'),
    },
    table: {
      pkg: require(paths.modules + 'components-table/package.json'),
      css: fs.readFileSync(paths.modules + 'components-table/index.css', 'utf8'),
    },
  },
  tools: {
    align: {
      pkg: require(paths.modules + 'tools-align/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-align/lib/align.css', 'utf8'),
      sm: fs.readFileSync(paths.modules + 'tools-align/lib/sm-align.css', 'utf8'),
      md: fs.readFileSync(paths.modules + 'tools-align/lib/md-align.css', 'utf8'),
      lg: fs.readFileSync(paths.modules + 'tools-align/lib/lg-align.css', 'utf8'),
    },
    background: {
      pkg: require(paths.modules + 'tools-background/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-background/lib/background.css', 'utf8'),
      sm: fs.readFileSync(paths.modules + 'tools-background/lib/sm-background.css', 'utf8'),
      md: fs.readFileSync(paths.modules + 'tools-background/lib/md-background.css', 'utf8'),
      lg: fs.readFileSync(paths.modules + 'tools-background/lib/lg-background.css', 'utf8'),
    },
    border: {
      pkg: require(paths.modules + 'tools-border/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-border/lib/border.css', 'utf8'),
      sm: fs.readFileSync(paths.modules + 'tools-border/lib/sm-border.css', 'utf8'),
      md: fs.readFileSync(paths.modules + 'tools-border/lib/md-border.css', 'utf8'),
      lg: fs.readFileSync(paths.modules + 'tools-border/lib/lg-border.css', 'utf8'),
    },
    boxsizing: {
      pkg: require(paths.modules + 'tools-boxsizing/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-boxsizing/index.css', 'utf8'),
    },
    clear: {
      pkg: require(paths.modules + 'tools-clear/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-clear/index.css', 'utf8'),
    },
    display: {
      pkg: require(paths.modules + 'tools-display/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-display/lib/display.css', 'utf8'),
      sm: fs.readFileSync(paths.modules + 'tools-display/lib/sm-display.css', 'utf8'),
      md: fs.readFileSync(paths.modules + 'tools-display/lib/md-display.css', 'utf8'),
      lg: fs.readFileSync(paths.modules + 'tools-display/lib/lg-display.css', 'utf8'),
    },
    gutter: {
      pkg: require(paths.modules + 'tools-gutter/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-gutter/lib/gutter.css', 'utf8'),
      sm: fs.readFileSync(paths.modules + 'tools-gutter/lib/sm-gutter.css', 'utf8'),
      md: fs.readFileSync(paths.modules + 'tools-gutter/lib/md-gutter.css', 'utf8'),
      lg: fs.readFileSync(paths.modules + 'tools-gutter/lib/lg-gutter.css', 'utf8'),
    },
    height: {
      pkg: require(paths.modules + 'tools-height/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-height/lib/height.css', 'utf8'),
      sm: fs.readFileSync(paths.modules + 'tools-height/lib/sm-height.css', 'utf8'),
      md: fs.readFileSync(paths.modules + 'tools-height/lib/md-height.css', 'utf8'),
      lg: fs.readFileSync(paths.modules + 'tools-height/lib/lg-height.css', 'utf8'),
    },
    layout: {
      pkg: require(paths.modules + 'tools-layout/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-layout/lib/layout.css', 'utf8'),
      sm: fs.readFileSync(paths.modules + 'tools-layout/lib/sm-layout.css', 'utf8'),
      md: fs.readFileSync(paths.modules + 'tools-layout/lib/md-layout.css', 'utf8'),
      lg: fs.readFileSync(paths.modules + 'tools-layout/lib/lg-layout.css', 'utf8'),
    },
    overflow: {
      pkg: require(paths.modules + 'tools-overflow/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-overflow/lib/overflow.css', 'utf8'),
      sm: fs.readFileSync(paths.modules + 'tools-overflow/lib/sm-overflow.css', 'utf8'),
      md: fs.readFileSync(paths.modules + 'tools-overflow/lib/md-overflow.css', 'utf8'),
      lg: fs.readFileSync(paths.modules + 'tools-overflow/lib/lg-overflow.css', 'utf8'),
    },
    typography: {
      pkg: require(paths.modules + 'tools-typography/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-typography/lib/typography.css', 'utf8'),
      sm: fs.readFileSync(paths.modules + 'tools-typography/lib/sm-typography.css', 'utf8'),
      md: fs.readFileSync(paths.modules + 'tools-typography/lib/md-typography.css', 'utf8'),
      lg: fs.readFileSync(paths.modules + 'tools-typography/lib/lg-typography.css', 'utf8'),
    },
    space: {
      pkg: require(paths.modules + 'tools-space/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-space/lib/space.css', 'utf8'),
      sm: fs.readFileSync(paths.modules + 'tools-space/lib/sm-space.css', 'utf8'),
      md: fs.readFileSync(paths.modules + 'tools-space/lib/md-space.css', 'utf8'),
      lg: fs.readFileSync(paths.modules + 'tools-space/lib/lg-space.css', 'utf8'),
    },
    shadow: {
      pkg: require(paths.modules + 'tools-shadow/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-shadow/lib/shadow.css', 'utf8'),
      sm: fs.readFileSync(paths.modules + 'tools-shadow/lib/sm-shadow.css', 'utf8'),
      md: fs.readFileSync(paths.modules + 'tools-shadow/lib/md-shadow.css', 'utf8'),
      lg: fs.readFileSync(paths.modules + 'tools-shadow/lib/lg-shadow.css', 'utf8'),
    },
    width: {
      pkg: require(paths.modules + 'tools-width/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-width/lib/width.css', 'utf8'),
      sm: fs.readFileSync(paths.modules + 'tools-width/lib/sm-width.css', 'utf8'),
      md: fs.readFileSync(paths.modules + 'tools-width/lib/md-width.css', 'utf8'),
      lg: fs.readFileSync(paths.modules + 'tools-width/lib/lg-width.css', 'utf8'),
    },
  }
}
