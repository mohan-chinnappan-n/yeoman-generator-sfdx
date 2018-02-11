
```bash
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (tests) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/mchinnappan/tests/package.json:

{
  "name": "tests",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) 

#---------
$ yo sfdx

     _-----_     
    |       |    ╭──────────────────────────────────────────╮
    |--(o)--|    │ Update available: 2.0.1 (current: 2.0.0) │
   `---------´   │     Run npm install -g yo to update.     │
    ( _´U`_ )    ╰──────────────────────────────────────────╯
    /___A___\   /
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 


     _-----_     
    |       |    ╭──────────────────────────╮
    |--(o)--|    │  Welcome to SFDX Project │
   `---------´   │        Generator!        │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 

Here is Org list, note down the ALIAS for your scratch org you like to work with:
=== Orgs
     ALIAS   USERNAME                              ORG ID              CONNECTED STATUS
───  ──────  ────────────────────────────────────  ──────────────────  ─────────────────
(D)  DevHub  mohan.chinnappan.n_dh_1@gmail.com     00D6A000001LbwLUAS  Connected


  ALIAS                    SCRATCH ORG NAME     USERNAME                       ORG ID              EXPIRATION DATE
  ───────────────────────  ───────────────────  ─────────────────────────────  ──────────────────  ───────────────
  geolocationAppScratch1   mchinnappan Company  test-irkcftkmuyzr@example.com  00DR00000001xNfMAI  2018-02-16
  geolocationTestScratch1  mchinnappan Company  test-huvk8zzifavh@example.com  00D560000004foREAQ  2018-02-17


? Project Name MyProject
? Github User Email mohan.chinnappan.n@gmail.com
? Scratch Org Name geolocationTestScratch1
? Scratch Org Alias geolocationTestScratch1
? API version 38.0
? Apex Controller Name ContactController
? Visualforce Page Name ContactPage
? Lightning App Name ContactApp
=========================
prjName:  MyProject
apiVersion:  38.0
scratchOrgName:  geolocationTestScratch1
scratchOrgAlias:  geolocationTestScratch1
Creating folders...
Creating folders... completed.
Creating config for project...
Creating config for scratch org...
Creating config for project...completed.
githubUserEmail:  mohan.chinnappan.n@gmail.com
apexCtrlName:  ContactController
vfPageName:  ContactPage
lxApp:  ContactApp
=========================
Creating Apex classes...
Creating Visualforce pages...
Creating Apex Test Classes...
Creating Lightning Application...
target dir = /Users/mchinnappan/tests/MyProject/force-app/main/default/aura
   create ContactApp/ContactApp.app
   create ContactApp/ContactApp.app-meta.xml
   create ContactApp/ContactAppController.js
   create ContactApp/ContactAppHelper.js
   create ContactApp/ContactApp.css
   create ContactApp/ContactAppRenderer.js
   create ContactApp/ContactApp.svg
   create ContactApp/ContactApp.auradoc

   create ../../../../sfdx-project.json
   create ../../../../config/scratch-org-def.json
   create ../classes/ContactController.cls
   create ../classes/ContactController.cls-meta.xml
   create ../pages/ContactPage.page
   create ../pages/ContactPage.page-meta.xml
   create ../../../test/default/classes/ContactControllerTests.cls
   create ../../../test/default/classes/ContactControllerTests.cls-meta.xml
Pushing code to the scratch org...
=== Set Config
NAME             VALUE
───────────────  ───────────────────────
defaultusername  geolocationTestScratch1
=== Pushed Source
STATE  FULL NAME                           TYPE                  PROJECT PATH
─────  ──────────────────────────────────  ────────────────────  ──────────────────────────────────────────────────────────────────
Add    ContactApp/ContactApp.app           AuraDefinitionBundle  force-app/main/default/aura/ContactApp/ContactApp.app
Add    ContactApp/ContactApp.app           AuraDefinitionBundle  force-app/main/default/aura/ContactApp/ContactApp.app-meta.xml
Add    ContactApp/ContactApp.auradoc       AuraDefinitionBundle  force-app/main/default/aura/ContactApp/ContactApp.auradoc
Add    ContactApp/ContactApp.css           AuraDefinitionBundle  force-app/main/default/aura/ContactApp/ContactApp.css
Add    ContactApp/ContactApp.svg           AuraDefinitionBundle  force-app/main/default/aura/ContactApp/ContactApp.svg
Add    ContactApp/ContactAppController.js  AuraDefinitionBundle  force-app/main/default/aura/ContactApp/ContactAppController.js
Add    ContactApp/ContactAppHelper.js      AuraDefinitionBundle  force-app/main/default/aura/ContactApp/ContactAppHelper.js
Add    ContactApp/ContactAppRenderer.js    AuraDefinitionBundle  force-app/main/default/aura/ContactApp/ContactAppRenderer.js
Add    ContactController                   ApexClass             force-app/main/default/classes/ContactController.cls
Add    ContactController                   ApexClass             force-app/main/default/classes/ContactController.cls-meta.xml
Add    ContactPage                         ApexPage              force-app/main/default/pages/ContactPage.page
Add    ContactPage                         ApexPage              force-app/main/default/pages/ContactPage.page-meta.xml
Add    ContactControllerTests              ApexClass             force-app/test/default/classes/ContactControllerTests.cls
Add    ContactControllerTests              ApexClass             force-app/test/default/classes/ContactControllerTests.cls-meta.xml
Starting SFDX: Open Default Scratch Org...
Access org 00D560000004foREAQ as user test-huvk8zzifavh@example.com with the following URL: https://data-site-1338-dev-ed.cs42.my.salesforce.com/secur/frontdoor.jsp?sid=00D560000004foR!AQQAQBrvYwig7fw9IE4joRqqrzHCFtIqPbHahewuldyfO4SiY9EwAAZYCLor414K_BuV8KrSX_4A9eUP8lyYOrnlf02pnR6E&retURL=c%2FContactApp.app

     _-----_     ╭──────────────────────────╮
    |       |    │  Your project is ready!  │
    |--(o)--|    │ run: code . to launch VS │
   `---------´   │           Code           │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 

# make changes in the app

cd MyProject
cat force-app/main/default/aura/ContactApp/ContactApp.app


$ sfdx force:source:push -u geolocationTestScratch1

<aura:application>
 <h4>Test</h4>
</aura:application>

$ sfdx force:source:push -u geolocationTestScratch1
=== Pushed Source
STATE    FULL NAME                  TYPE                  PROJECT PATH
───────  ─────────────────────────  ────────────────────  ─────────────────────────────────────────────────────
Changed  ContactApp/ContactApp.app  AuraDefinitionBundle  force-app/main/default/aura/ContactApp/ContactApp.app
 
# opent the ContactApp using CLI

$ sfdx force:org:open -u geolocationTestScratch1 -p c/ContactApp.app
Access org 00D560000004foREAQ as user test-huvk8zzifavh@example.com with the following URL: https://data-site-1338-dev-ed.cs42.my.salesforce.com/secur/frontdoor.jsp?sid=00D560000004foR!AQQAQBrvYwig7fw9IE4joRqqrzHCFtIqPbHahewuldyfO4SiY9EwAAZYCLor414K_BuV8KrSX_4A9eUP8lyYOrnlf02pnR6E&retURL=c%2FContactApp.app

```



