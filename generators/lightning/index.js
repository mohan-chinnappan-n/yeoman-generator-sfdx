var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');



class MyBase extends Generator {
  // ref: http://yeoman.io/authoring/running-context.html
  helper() {
    console.log('methods on the parent generator won\'t be called automatically');
  }
}

module.exports = class extends MyBase {

  constructor(args, opts) {
     // Calling the super constructor is important so our generator is correctly set up
     super(args, opts)

      // instatnce methods - in constructor
     this.helperMethod = function () {
       console.log('won\'t be called automatically');
     };

     // This makes `appname` a required argument.
     this.argument('appname', { type: String, required: false });

     // And you can then access it later; e.g.
    this.log("appname passed from the cmd arg: " + this.options.appname);

    //====

    // This method adds support for a `--coffee` flag
    this.option('coffee');

    // And you can then access it later; e.g.
    // yo sfdx:lightning java --coffee

    this.scriptSuffix = (this.options.coffee ? ".coffee": ".js");
    this.log(yosay(
         chalk.red("appname passed from the cmd arg --coffee: " + this.scriptSuffix)
        )
     );







   }


  // prototype methods
  // are run the sequence by Yeoman env run-loop
  // theseare considered to be a task
  method1() {
    this.log('method 1 just ran in lightning');
  }

  _private_hw() {
    this.log("this is a private method, will not be called automatically")
  }

  method2() {
    this.log('method 2 just ran in lightning ');
    this._private_hw();
  }

  // priorities based
  // prompting queue  is here to ask for feedback from the user.
  // ref: http://yeoman.io/authoring/user-interactions.html
  prompting() {
      return this.prompt([{
        type    : 'input',
        name    : 'name', // binding variable
        message : 'Your project name',
        default : this.appname // Default to current folder name
      },
      {
        type    : 'confirm', //Y or n
        name    : 'cool',  // binding variable
        message : 'Would you like to enable the Cool feature?'
      },
      {
        type    : 'input',
        name    : 'githubUsername',
        message : 'What\'s your GitHub username',
        // This property allows you to specify that the user provided answer should be used
        //  as the default answer in the future.
        store   : true
      }



    ]).then((answers) => {
        this.log("=========================");
        this.log('app name: ', answers.name);
        this.log('cool feature:', answers.cool);
        this.log("=========================");
        this.log('githubUsername :', answers.githubUsername);
        this.log("=========================");
      });
  }

  initializing() {
    console.log('priorities: initializing');
    this.method2();
  }

  end() {

    console.log('goodbye!');
  }

  // file writing
  // http://yeoman.io/authoring/file-system.html

  writing() {
    console.log("WRITING")
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('public/index.html'),
      { title: 'Templating with Yeoman' }
    );
  }


  asyncTask() {
  var done = this.async();
  console.log('inside asyncTask');
  this.end();

  //  getUserEmail(function (err, name) {
  //    done(err);
  //  });
  }





};
