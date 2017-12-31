## Yeoman generator for SFDX

## NPM repo location:

[npm repo](https://www.npmjs.com/package/generator-sfdx)



### Install

```
# create a nodejs project
$ npm init
# install Yeoman generator for SFDX
$ npm install generator-sfdx

```


### Usage Demo

```
$ yo sfdx
```
![yeoman sfdx gen](img/sfdx-yo-4.gif)


## Generated Project folder structure

```
$ tree MyProject/
MyProject/
├── config
│   └── scratch-org-def.json
├── force-app
│   ├── main
│   │   └── default
│   │       ├── aura
│   │       │   └── ContactApp
│   │       │       ├── ContactApp.app
│   │       │       ├── ContactApp.app-meta.xml
│   │       │       ├── ContactApp.auradoc
│   │       │       ├── ContactApp.css
│   │       │       ├── ContactApp.svg
│   │       │       ├── ContactAppController.js
│   │       │       ├── ContactAppHelper.js
│   │       │       └── ContactAppRenderer.js
│   │       ├── classes
│   │       │   ├── ContactController.cls
│   │       │   └── ContactController.cls-meta.xml
│   │       ├── pages
│   │       │   ├── ContactPage.page
│   │       │   └── ContactPage.page-meta.xml
│   │       └── tests
│   └── test
│       └── default
│           └── classes
│               ├── ContactControllerTests.cls
│               └── ContactControllerTests.cls-meta.xml
└── sfdx-project.json

12 directories, 16 files

```

## Edit with VS Code


```
$ cd MyProject

$ code .



```



![sfdx-gen-edit-1](./img/sfdx-gen-edit-1.png)


### Apex code completion

![sfdx-gen-edit-2](./img/sfdx-gen-edit-2.png)


### Apex PMD code-scan extension for VS Code
![sfdx-gen-edit-pmd](./img/sfdx-gen-edit-pmd.png)
