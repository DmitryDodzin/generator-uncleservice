
const Generator = require('yeoman-generator');

class YaasGenerator extends Generator {

  prompting() {
    return this.prompt([{
        type    : 'input',
        name    : 'name',
        message : 'Your module name',
        default : this.appname // Default to current folder name
      }, {
        type    : 'input',
        name    : 'prefix',
        message : 'Prefix for your module(project/product/company)',
        store   : true
      }, {
        type    : 'input',
        name    : 'description',
        message : 'Your project description'
      }])
      .then((answers) => {
        this.props = Object.assign({}, answers);
      });
  }

  copyTempalte() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), 
      this.props
    );
  }

  copySrc() {
    this.fs.copy(
      this.templatePath('bin'),
      this.destinationPath('bin')
    );
    this.fs.copy(
      this.templatePath('conf'),
      this.destinationPath('conf')
    );
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src')
    );

    // Configs
    this.fs.copy(this.templatePath('.babelrc'), this.destinationPath('.babelrc'));

    this.fs.copy(this.templatePath('.gconfrc'), this.destinationPath('.gconfrc'));

    this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));

    this.fs.copy(this.templatePath('.jshintrc'), this.destinationPath('.jshintrc'));

    this.fs.copy(this.templatePath('.nycrc'), this.destinationPath('.nycrc'));

    this.fs.copy(this.templatePath('_dockerignore'), this.destinationPath('.dockerignore'));

    this.fs.copy(this.templatePath('Dockerfile'), this.destinationPath('Dockerfile'));

  }

  installingExpress() {
    this.npmInstall([
      'express',
      'body-parser',
      'compression',
      'errorhandler',
      'helmet',
      'gconf',
      'morgan'
    ], { 'save': true });
  }

  installingDepends() {
    this.npmInstall([
      'babel-cli',
      'babel-core',
      'babel-plugin-istanbul',
      'babel-preset-env', 
      'babel-preset-stage-0',
      'babel-register',
      'chai',
      'chai-as-promised',
      'lib-monkey',
      'cross-env',
      'mocha',
      'nyc',
      'sinon',
      'supertest'
    ], { 'save-dev': true });
  }

}

module.exports = YaasGenerator;