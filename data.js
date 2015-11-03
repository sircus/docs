'use strict'

var fs = require('fs')
var yaml = require('js-yaml')
var paths = {
  modules: './node_modules/sircus/node_modules/sircus-'
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
    body: {
      css: fs.readFileSync(paths.modules + 'elements/lib/body.css', 'utf8')
    },
    heading: {
      css: fs.readFileSync(paths.modules + 'elements/lib/heading.css', 'utf8')
    },
    image: {
      css: fs.readFileSync(paths.modules + 'elements/lib/image.css', 'utf8')
    },
    link: {
      css: fs.readFileSync(paths.modules + 'elements/lib/link.css', 'utf8')
    },
    space: {
      css: fs.readFileSync(paths.modules + 'elements/lib/space.css', 'utf8')
    },
  },
  components: {
    button: {
      pkg: require(paths.modules + 'components-button/package.json'),
      css: fs.readFileSync(paths.modules + 'components-button/index.css', 'utf8'),
      fill: {
        pkg: require(paths.modules + 'components-button-fill/package.json'),
        css: fs.readFileSync(paths.modules + 'components-button-fill/index.css', 'utf8'),
      },
      size: {
        pkg: require(paths.modules + 'components-button-size/package.json'),
        css: fs.readFileSync(paths.modules + 'components-button-size/index.css', 'utf8'),
      },
      reset: {
        pkg: require(paths.modules + 'components-button-reset/package.json'),
        css: fs.readFileSync(paths.modules + 'components-button-reset/index.css', 'utf8'),
      }
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
      size: {
        pkg: require(paths.modules + 'components-form-size/package.json'),
        css: fs.readFileSync(paths.modules + 'components-form-size/index.css', 'utf8'),
      }
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
      css: fs.readFileSync(paths.modules + 'tools-align/index.css', 'utf8'),
      responsive: {
        pkg: require(paths.modules + 'tools-align-responsive/package.json'),
        sm: fs.readFileSync(paths.modules + 'tools-align-responsive/lib/sm-align.css', 'utf8'),
        md: fs.readFileSync(paths.modules + 'tools-align-responsive/lib/md-align.css', 'utf8'),
        lg: fs.readFileSync(paths.modules + 'tools-align-responsive/lib/lg-align.css', 'utf8'),
      }
    },
    border: {
      pkg: require(paths.modules + 'tools-border/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-border/index.css', 'utf8'),
      responsive: {
        pkg: require(paths.modules + 'tools-border-responsive/package.json'),
        sm: fs.readFileSync(paths.modules + 'tools-border-responsive/lib/sm-border.css', 'utf8'),
        md: fs.readFileSync(paths.modules + 'tools-border-responsive/lib/md-border.css', 'utf8'),
        lg: fs.readFileSync(paths.modules + 'tools-border-responsive/lib/lg-border.css', 'utf8'),
      }
    },
    boxsizing: {
      pkg: require(paths.modules + 'tools-boxsizing/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-boxsizing/index.css', 'utf8'),
    },
    clear: {
      pkg: require(paths.modules + 'tools-clear/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-clear/index.css', 'utf8'),
    },
    color: {
      pkg: require(paths.modules + 'tools-color/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-color/index.css', 'utf8'),
    },
    border: {
      pkg: require(paths.modules + 'tools-border/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-border/index.css', 'utf8'),
      responsive: {
        pkg: require(paths.modules + 'tools-border-responsive/package.json'),
        sm: fs.readFileSync(paths.modules + 'tools-border-responsive/lib/sm-border.css', 'utf8'),
        md: fs.readFileSync(paths.modules + 'tools-border-responsive/lib/md-border.css', 'utf8'),
        lg: fs.readFileSync(paths.modules + 'tools-border-responsive/lib/lg-border.css', 'utf8'),
      }
    },
    display: {
      pkg: require(paths.modules + 'tools-display/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-display/index.css', 'utf8'),
      responsive: {
        pkg: require(paths.modules + 'tools-display-responsive/package.json'),
        sm: fs.readFileSync(paths.modules + 'tools-display-responsive/lib/sm-display.css', 'utf8'),
        md: fs.readFileSync(paths.modules + 'tools-display-responsive/lib/md-display.css', 'utf8'),
        lg: fs.readFileSync(paths.modules + 'tools-display-responsive/lib/lg-display.css', 'utf8'),
      }
    },
    gutter: {
      pkg: require(paths.modules + 'tools-gutter/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-gutter/index.css', 'utf8'),
      responsive: {
        pkg: require(paths.modules + 'tools-gutter-responsive/package.json'),
        sm: fs.readFileSync(paths.modules + 'tools-gutter-responsive/lib/sm-gutter.css', 'utf8'),
        md: fs.readFileSync(paths.modules + 'tools-gutter-responsive/lib/md-gutter.css', 'utf8'),
        lg: fs.readFileSync(paths.modules + 'tools-gutter-responsive/lib/lg-gutter.css', 'utf8'),
      }
    },
    layout: {
      pkg: require(paths.modules + 'tools-layout/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-layout/index.css', 'utf8'),
      responsive: {
        pkg: require(paths.modules + 'tools-layout-responsive/package.json'),
        sm: fs.readFileSync(paths.modules + 'tools-layout-responsive/lib/sm-layout.css', 'utf8'),
        md: fs.readFileSync(paths.modules + 'tools-layout-responsive/lib/md-layout.css', 'utf8'),
        lg: fs.readFileSync(paths.modules + 'tools-layout-responsive/lib/lg-layout.css', 'utf8'),
      }
    },
    overflow: {
      pkg: require(paths.modules + 'tools-overflow/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-overflow/index.css', 'utf8'),
      responsive: {
        pkg: require(paths.modules + 'tools-overflow-responsive/package.json'),
        sm: fs.readFileSync(paths.modules + 'tools-overflow-responsive/lib/sm-overflow.css', 'utf8'),
        md: fs.readFileSync(paths.modules + 'tools-overflow-responsive/lib/md-overflow.css', 'utf8'),
        lg: fs.readFileSync(paths.modules + 'tools-overflow-responsive/lib/lg-overflow.css', 'utf8'),
      }
    },
    typography: {
      pkg: require(paths.modules + 'tools-typography/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-typography/index.css', 'utf8'),
    },
    space: {
      pkg: require(paths.modules + 'tools-space/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-space/index.css', 'utf8'),
      responsive: {
        pkg: require(paths.modules + 'tools-space-responsive/package.json'),
        sm: fs.readFileSync(paths.modules + 'tools-space-responsive/lib/sm-space.css', 'utf8'),
        md: fs.readFileSync(paths.modules + 'tools-space-responsive/lib/md-space.css', 'utf8'),
        lg: fs.readFileSync(paths.modules + 'tools-space-responsive/lib/lg-space.css', 'utf8'),
      }
    },
    width: {
      pkg: require(paths.modules + 'tools-width/package.json'),
      css: fs.readFileSync(paths.modules + 'tools-width/index.css', 'utf8'),
      responsive: {
        pkg: require(paths.modules + 'tools-width-responsive/package.json'),
        sm: fs.readFileSync(paths.modules + 'tools-width-responsive/lib/sm-width.css', 'utf8'),
        md: fs.readFileSync(paths.modules + 'tools-width-responsive/lib/md-width.css', 'utf8'),
        lg: fs.readFileSync(paths.modules + 'tools-width-responsive/lib/lg-width.css', 'utf8'),
      }
    },
  }
}
