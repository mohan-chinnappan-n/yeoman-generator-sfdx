## Steps

1. create scratch org

```
# set alias and default DevHub
$ sfdx force:auth:web:login --setdefaultdevhubusername --setalias DevHub

# check org list
$ sfdx force:org:list


 $ cd MyProject
 $ sfdx force:org:create  -a MyOrg1 -s -f MyProject/config/scratch-org-def.json
 Successfully created scratch org: 00D630000000l3xEAA, username: test-xm7rnw0hygj9@myscratchorg_1.net

 $ sfdx force:org:list
 === Orgs
      ALIAS   USERNAME                              ORG ID              CONNECTED STATUS
 ───  ──────  ────────────────────────────────────  ──────────────────  ─────────────────
              mohan.chinnappan.n.dx1@gmail.com      00Df4000000nn2KEAQ  authDecryptFailed
              mohan.chinnappan.n23@gmail.com        00Df40000003eOAEAY  Connected
              mohan.chinnappan.n30@gmail.com        00Df4000000nUtnEAE  authDecryptFailed
              mohan.chinnappan.n32@gmail.com        00Df4000001TuquEAC  authDecryptFailed
              mohan.chinnappan.n_devhub@gmail.com   00D1I000001UmBpUAK  authDecryptFailed
 (D)  DevHub  mohan.chinnappan.n2.devhub@gmail.com  00D1I000003nO9oUAE  Connected


      ALIAS         SCRATCH ORG NAME     USERNAME                                   ORG ID              EXPIRATION DATE
 ───  ────────────  ───────────────────  ─────────────────────────────────────────  ──────────────────  ───────────────
 (U)                MyScratchOrg 1       test-xm7rnw0hygj9@myscratchorg_1.net       00D630000000l3xEAA  2018-01-05
      MyDevOrg_100  mchinnappan Company  test-wncfnsrx2mbf@mchinnappan_company.net  00D5C0000000OTsUAM  2018-01-04



```


2. Push your source.

```
$ sfdx force:source:push

```

3. Open the scratch org.

```
sfdx force:org:open --path one/one.app
```
