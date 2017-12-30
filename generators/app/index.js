var Generator = require('yeoman-generator');
var shelljs = require('shelljs');
const githubUsername = require('github-username');


module.exports = class extends Generator {


  // composing: http://yeoman.io/authoring/composability.html
  //

  initializing() {


    //this.argument('apiVersion', { type: String, required: true });

    // You can get the destination path using generator.destinationRoot()
    // or by joining a path using generator.destinationPath('sub/path').
    // ref:http://yeoman.io/authoring/file-system.html


    console.log("destinationRoot :" + this.destinationRoot())
    console.log(this.destinationPath('package.json'));
    console.log(this.contextRoot)

    console.log("template context: " + this.sourceRoot());
    console.log("template file: " +  this.templatePath('index.html'))
    console.log("destinationPath:" + this.destinationPath('public'));

    //this.composeWith(require.resolve('../classic'));
    //this.composeWith(require.resolve('../lightning'));




  }

  prompting() {
      return this.prompt([
        {
          type    : 'input',
          name    : 'prjName', // binding variable
          message : 'Project Name',
          default : "MyProject"
        },

        {
          type    : 'input',
          name    : 'githubUserEmail', // binding variable
          message : 'Github User Email',
          default : "mohan.chinnappan.n@gmail.com"
        },

        {
          type    : 'input',
          name    : 'scratchOrgName', // binding variable
          message : 'Scratch Org Name',
          default : "MyScratchOrg 1"
        },

        {
        type    : 'input',
        name    : 'apiVersion', // binding variable
        message : 'API version',
        default : "38.0"
      },

     {
        type    : 'input',
        name    : 'apexCtrlName', // binding variable
        message : 'Apex Controller Name',
        default : "ContactController"
      },

      {
         type    : 'input',
         name    : 'vfPageName', // binding variable
         message : 'Visualforce Page Name',
         default : "ContactPage"
       }

    ]).then((answers) => {
        this.log("=========================");

        this.log('prjName: ', answers.prjName);
        this.options.prjName = answers.prjName;

        this.log('githubUserEmail: ', answers.githubUserEmail);
        this.options.githubUserEmail = answers.githubUserEmail;


        this.log('scratchOrgName: ', answers.scratchOrgName);
        this.options.scratchOrgName = answers.scratchOrgName;

        this.log('apiVersion: ', answers.apiVersion);
        this.options.apiVersion = answers.apiVersion;

        this.log('apexCtrlName: ', answers.apexCtrlName);
        this.options.apexCtrlName = answers.apexCtrlName;

        this.log('vfPageName: ', answers.vfPageName);
        this.options.vfPageName = answers.vfPageName;

        this.log("=========================");
      });
  }



  // following is equivalent to:
  // npm install lodash --save-dev
  // ref: http://yeoman.io/authoring/dependencies.html


  installingLodash() {
    //  this.yarnInstall(['lodash'], { 'dev': true });
    this.npmInstall(['lodash'], { 'save-dev': true });
  }

  writing() {

    githubUsername(this.options.githubUserEmail).then(username => {
    	this.options.githubUsername = username;
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath(this.options.prjName + '/index.html'),
        { title: 'Templating with Yeoman: ' + this.options.githubUsername }
      );


      // config files

      this.fs.copyTpl(
        this.templatePath('config/sfdx-project.json'),
        this.destinationPath(this.options.prjName + '/sfdx-project.json'),
        { appPath: 'force-app',
          apiVersion:   this.options.apiVersion
        }
      );

      this.fs.copyTpl(
        this.templatePath('config/scratch-org-def.json'),
        this.destinationPath(this.options.prjName + '/config/scratch-org-def.json'),
        { orgName: this.options.scratchOrgName,
          githubUserEmail: this.options.githubUserEmail
        }
      );


    });






    // apex
    this.fs.copyTpl(
        this.templatePath('apex/DemoController.cls'),
        this.destinationPath(this.options.prjName + '/force-app/main/default/classes/' + this.options.apexCtrlName + ".cls"),
        { apiVersion:   this.options.apiVersion,
          apexCtrlName: this.options.apexCtrlName

        }
    );
    this.fs.copyTpl(
        this.templatePath('apex/DemoController.cls-meta.xml'),
        this.destinationPath(this.options.prjName + '/force-app/main/default/classes/' + this.options.apexCtrlName + ".cls-meta.xml"),
        { apiVersion:   this.options.apiVersion
        }
    );

    // vf pages

    this.fs.copyTpl(
        this.templatePath('pages/demoPage.page'),
        this.destinationPath(this.options.prjName + '/force-app/main/default/pages/' + this.options.vfPageName + '.page'),
        {
          apexCtrlName: this.options.apexCtrlName
        }
    );

    this.fs.copyTpl(
        this.templatePath('pages/demoPage.page-meta.xml'),
        this.destinationPath(this.options.prjName + '/force-app/main/default/pages/' + this.options.vfPageName + '.page-meta.xml'),
        {
          apexCtrlName: this.options.apexCtrlName,
          vfPageName: this.options.vfPageName,
          apiVersion:   this.options.apiVersion

        }
    );

    // test files

    // apexTests
    this.fs.copyTpl(
        this.templatePath('apexTests/DemoControllerTests.cls'),
        this.destinationPath(this.options.prjName + '/force-app/test/default/classes/' + this.options.apexCtrlName + "Tests.cls"),
        { apiVersion:   this.options.apiVersion,
          apexCtrlName: this.options.apexCtrlName,
          vfPageName: this.options.vfPageName

        }
    );

    this.fs.copyTpl(
        this.templatePath('apexTests/DemoControllerTests.cls-meta.xml'),
        this.destinationPath(this.options.prjName + '/force-app/test/default/classes/' + this.options.apexCtrlName + "Tests.cls-meta.xml"),
        { apiVersion:   this.options.apiVersion
        }
    );







  }

  end() {

    console.log('goodbye');
  }







};
