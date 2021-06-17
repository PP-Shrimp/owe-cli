"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the peachy ${chalk.red("generator-owe-cli")} generator!`
      )
    );

    const prompts = [
      // 项目名称
      {
        type: "input",
        name: "projectName",
        message: "Please input project name (manage_app):",
        default: "manage_app"
      },
      // 描述
      {
        type: "input",
        name: "description",
        message: "Please input project description:"
      },
      // 主文件
      {
        type: "input",
        name: "projectMain",
        message: "Main file (main.js):",
        default: "main.js"
      },
      // 作者
      {
        type: "input",
        name: "projectAuthor",
        message: "Author:"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    console.log(this.fs.readJSON);
    // 创建readme
    // let readmeTpl = this.fs.read(this.templatePath('README.md'));
    // this.fs.write(this.destinationPath('README.md'), readmeTpl({
    //   generatorName: 'generator-owe-cli',
    //   yoName: 'owecli'
    // }));

    // 创建packageJson
    // let pkg = this.fs.readJSON(this.templatePath('package.json'), {});
    // Object.extend(pkg, {
    //   dependencies: {
    //     "axios": "^0.18.0",
    //     "babel-polyfill": "^6.26.0",
    //     "element-ui": "^2.2.1",
    //     "font-awesome": "^4.7.0",
    //     "vue": "^2.5.2",
    //     "vue-resource": "^1.5.0",
    //     "vue-router": "^3.0.1",
    //     "vuex": "^3.0.1"
    //   },
    //   devDependencies: {
    //     "autoprefixer": "^7.1.2",
    //     "babel-core": "^6.22.1",
    //     "babel-helper-vue-jsx-merge-props": "^2.0.3",
    //     "babel-loader": "^7.1.1",
    //     "babel-plugin-syntax-jsx": "^6.18.0",
    //     "babel-plugin-transform-runtime": "^6.22.0",
    //     "babel-plugin-transform-vue-jsx": "^3.5.0",
    //     "babel-preset-env": "^1.3.2",
    //     "babel-preset-stage-2": "^6.22.0",
    //     "chalk": "^2.0.1",
    //     "copy-webpack-plugin": "^4.0.1",
    //     "css-loader": "^0.28.0",
    //     "extract-text-webpack-plugin": "^3.0.0",
    //     "file-loader": "^1.1.4",
    //     "friendly-errors-webpack-plugin": "^1.6.1",
    //     "html-webpack-plugin": "^2.30.1",
    //     "node-notifier": "^5.1.2",
    //     "optimize-css-assets-webpack-plugin": "^3.2.0",
    //     "ora": "^1.2.0",
    //     "portfinder": "^1.0.13",
    //     "postcss-import": "^11.0.0",
    //     "postcss-loader": "^2.0.8",
    //     "postcss-url": "^7.2.1",
    //     "rimraf": "^2.6.0",
    //     "semver": "^5.3.0",
    //     "shelljs": "^0.7.6",
    //     "uglifyjs-webpack-plugin": "^1.1.1",
    //     "url-loader": "^0.5.8",
    //     "vue-loader": "^13.3.0",
    //     "vue-style-loader": "^3.0.1",
    //     "vue-template-compiler": "^2.5.2",
    //     "webpack": "^3.6.0",
    //     "webpack-bundle-analyzer": "^2.9.0",
    //     "webpack-dev-server": "^2.9.1",
    //     "webpack-merge": "^4.1.0"
    //   }
    // });

    // pkg.keywords = pkg.keywords || [];
    // pkg.keywords.push('generator-manage-cli');

    // pkg.name = this.props.projectName;
    // pkg.description = this.props.description;
    // pkg.main = this.props.projectMain;
    // pkg.author = this.props.projectAuthor;
    // pkg.license = 'MIT';

    // this.fs.writeJSON(this.destinationPath('package.json'), pkg);

    // 创建文件夹
    // mkdirp('build');
    // mkdirp('config');
    // mkdirp('api');
    // mkdirp('src/assets');
    // mkdirp('src/framework');
    // mkdirp('src/views');
    // mkdirp('src/router');
    // mkdirp('src/store');
    // mkdirp('src/store/modules');
    // mkdirp('src/utils');
    // mkdirp('static');
    // mkdirp('src/components');
    // mkdirp('src/components/public');

    this.fs.copy(this.templatePath("**"), this.destinationPath("./"));

    // This.fs.copy(
    //   this.templatePath('gitignore_tmpl'),
    //   this.destinationPath('.gitignore')
    // );
    // this.fs.copy(
    //   this.templatePath('babelrc_tmpl'),
    //   this.destinationPath('.babelrc')
    // );
    // this.fs.copy(
    //   this.templatePath('index_tmpl.html'),
    //   this.destinationPath('index.html')
    // );
    // this.fs.copy(
    //   this.templatePath('editorconfig_tmpl'),
    //   this.destinationPath('.editorconfig')
    // );
    // this.fs.copy(
    //   this.templatePath('.postcssrc_tmpl.js'),
    //   this.destinationPath('.postcssrc.js')
    // );
    // //src目录
    // this.fs.copy(
    //   this.templatePath('src/main_tmpl.js'),
    //   'src/main.js'
    // );
    // this.fs.copy(
    //   this.templatePath('src/App.vue'),
    //   'src/App.vue'
    // );
    // //src内router目录
    // this.fs.copy(
    //   this.templatePath('src/router/index.js'),
    //   'src/router/index.js'
    // );
    // //src 内store目录 全局状态机
    // this.fs.copy(
    //   this.templatePath('src/store/index.js'),
    //   'src/store/index.js'
    // );
    // this.fs.copy(
    //   this.templatePath('src/store/modules/project.js'),
    //   'src/store/modules/project.js'
    // );
    // config目录
    // this.fs.copy(
    //   this.templatePath('static/config.js'),
    //   'static/config.js'
    // );
    // build目录
    // this.fs.copy(
    //   this.templatePath('build/build.js'),
    //   'build/build.js'
    // );
    // this.fs.copy(
    //   this.templatePath('build/check-versions.js'),
    //   'build/check-versions.js'
    // );
    // this.fs.copy(
    //   this.templatePath('build/utils.js'),
    //   'build/utils.js'
    // );
    // this.fs.copy(
    //   this.templatePath('build/vue-loader.conf.js'),
    //   'build/vue-loader.conf.js'
    // );
    // this.fs.copy(
    //   this.templatePath('build/webpack.base.conf.js'),
    //   'build/webpack.base.conf.js'
    // );
    // this.fs.copy(
    //   this.templatePath('build/webpack.dev.conf.js'),
    //   'build/webpack.dev.conf.js'
    // );
    // this.fs.copy(
    //   this.templatePath('build/vue-loader.conf.js'),
    //   'build/vue-loader.conf.js'
    // );
    // this.fs.copy(
    //   this.templatePath('build/webpack.prod.conf.js'),
    //   'build/webpack.prod.conf.js'
    // );
    // config目录
    // this.fs.copy(
    //   this.templatePath('config/dev.env.js'),
    //   'config/dev.env.js'
    // );
    // this.fs.copy(
    //   this.templatePath('config/index.js'),
    //   'config/index.js'
    // );
    // this.fs.copy(
    //   this.templatePath('config/prod.env.js'),
    //   'config/prod.env.js'
    // );
    // static目录
    // this.fs.copy(
    //   this.templatePath('static/config.js'),
    //   'static/config.js'
    // );
  }

  install() {
    // This.installDependencies();
  }
};
