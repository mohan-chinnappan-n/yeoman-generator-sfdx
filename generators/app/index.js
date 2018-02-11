var Generator = require('yeoman-generator');
var shell = require('shelljs');
const githubUsername = require('github-username');

var chalk = require('chalk');
var yosay = require('yosay');



module.exports = class extends Generator {


  // composing: http://yeoman.io/authoring/composability.html
  //

  initializing() {

    this.log(yosay(
         chalk.red("Welcome to SFDX Project Generator!")
        )
     );

     this.log((
          chalk.green("Here is Org list, note down the ALIAS for your scratch org you like to work with:")
         )
      );

     shell.exec('sfdx force:org:list');



    //this.argument('apiVersion', { type: String, required: true });

    // You can get the destination path using generator.destinationRoot()
    // or by joining a path using generator.destinationPath('sub/path').
    // ref:http://yeoman.io/authoring/file-system.html

    /*
    console.log("destinationRoot :" + this.destinationRoot())
    console.log(this.destinationPath('package.json'));
    console.log(this.contextRoot)

    console.log("template context: " + this.sourceRoot());
    console.log("template file: " +  this.templatePath('index.html'))
    console.log("destinationPath:" + this.destinationPath('public'));
     */

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
          name    : 'scratchOrgAlias', // binding variable
          message : 'Scratch Org Alias',
          default : "MyOrg3"
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
       },

       {
          type    : 'input',
          name    : 'lxApp', // binding variable
          message : 'Lightning App Name',
          default : "ContactApp"
        }

        /*
        ,{
           type    : 'input',
           name    : 'lxCmp', // binding variable
           message : 'Lightning Component Name',
           default : "ContactComp"
         }
        */


    ]).then((answers) => {
        this.log("=========================");

        this.log('prjName: ', answers.prjName);
        this.options.prjName = answers.prjName;

        this.log('apiVersion: ', answers.apiVersion);
        this.options.apiVersion = answers.apiVersion;

        this.log('scratchOrgName: ', answers.scratchOrgName);
        this.options.scratchOrgName = answers.scratchOrgName;


        this.log('scratchOrgAlias: ', answers.scratchOrgAlias);
        this.options.scratchOrgAlias = answers.scratchOrgAlias;




        this.log(( chalk.green("Creating folders...") ) );


        shell.mkdir('-p', this.destinationRoot() + "/" + this.options.prjName + "/config");
        shell.mkdir('-p', this.destinationRoot() + "/" + this.options.prjName + "/force-app/main/default/classes");
        shell.mkdir('-p', this.destinationRoot() + "/" + this.options.prjName + "/force-app/main/default/tests");
        shell.mkdir('-p', this.destinationRoot() + "/" + this.options.prjName + "/force-app/main/default/aura");
        this.log(( chalk.green("Creating folders... completed.") ) );


        // config files

        this.log(( chalk.green("Creating config for project...") ) );


        this.fs.copyTpl(
          this.templatePath('config/sfdx-project.json'),
          this.destinationPath(this.options.prjName + '/sfdx-project.json'),
          { appPath: 'force-app',
            apiVersion:   this.options.apiVersion
          }
        );

        this.log(( chalk.green("Creating config for scratch org...") ) );

        this.fs.copyTpl(
          this.templatePath('config/scratch-org-def.json'),
          this.destinationPath(this.options.prjName + '/config/scratch-org-def.json'),
          { orgName: this.options.scratchOrgName,
            githubUserEmail: this.options.githubUserEmail
          }
        );

        this.log(( chalk.green("Creating config for project...completed.") ) );




        this.log('githubUserEmail: ', answers.githubUserEmail);
        this.options.githubUserEmail = answers.githubUserEmail;



        this.log('apexCtrlName: ', answers.apexCtrlName);
        this.options.apexCtrlName = answers.apexCtrlName;

        this.log('vfPageName: ', answers.vfPageName);
        this.options.vfPageName = answers.vfPageName;

        this.log('lxApp: ', answers.lxApp);
        this.options.lxApp = answers.lxApp;


        //this.log('lxCmp: ', answers.lxCmp);
        //this.options.lxCmp = answers.lxCmp;

        this.log("=========================");
      });
  }



  // following is equivalent to:
  // npm install lodash --save-dev
  // ref: http://yeoman.io/authoring/dependencies.html


  //installingLodash() {
    //  this.yarnInstall(['lodash'], { 'dev': true });
    // this.npmInstall(['lodash'], { 'save-dev': true });
  //}

  configuring() {

  /*
    githubUsername(this.options.githubUserEmail).then(username => {
    	this.options.githubUsername = username;
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath(this.options.prjName + '/index.html'),
        { title: 'Templating with Yeoman: ' + this.options.githubUsername }
      );
    });
  */









    // apex

    this.log(( chalk.green("Creating Apex classes...") ) );

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
   this.log(( chalk.green("Creating Visualforce pages...") ) );

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

    this.log(( chalk.green("Creating Apex Test Classes...") ) );

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

    // lightning

    this.log(( chalk.green("Creating Lightning Application...") ) );



     /*this.fs.copyTpl(
        this.templatePath('aura/readme.md'),
        this.destinationPath(this.options.prjName + '/force-app/main/default/aura/' + 'readme.md'),
        { lxApp:   this.options.lxApp,
          lxCmp: this.options.lxCmp

        }
    );
    */


    //shell.rm('-f', this.options.prjName + '/force-app/main/default/aura/' + 'readme.md');
    shell.cd(this.destinationRoot() + "/" + this.options.prjName + "/force-app/main/default/aura");
    shell.ls()
    // Run sfdx cli synchronously
    if (shell.exec('sfdx force:lightning:app:create -n ContactApp').code !== 0) {
      shell.echo('Error: sfdx force:lightning:app:create  failed');
      shell.exit(1);
    }



  }



  end() {

   this.log(( chalk.green("Pushing code to the scratch org...") ) );

    shell.cd(this.destinationRoot() + "/" + this.options.prjName);
    shell.exec('sfdx force:config:set defaultusername=' + this.options.scratchOrgAlias);

    if (shell.exec('sfdx force:source:push').code !== 0) {
      shell.echo('Error: sfdx force:source:push failed');
      shell.exit(1);
    } else {
      this.log( chalk.green("Starting SFDX: Open Default Scratch Org...")  );
      if (shell.exec('sfdx force:org:open -p c/' + this.options.lxApp + '.app').code !== 0) {
        shell.echo('Error: sfdx force:org:open failed');
        shell.exit(1);
      }
    }


    this.log(yosay( chalk.green("Your project is ready! run: code . to launch VS Code") ) );

  }







};
