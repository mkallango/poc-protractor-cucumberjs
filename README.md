# poc-protractor-cucumberjs

Sample how to use cucumberjs running with Protractor.

Requirements:

  * Nodejs
  
  * Protractor
  
--------
--------
Install dependencies:
```
npm install
```

Inside project folder run:
```
protractor conf.js --params.login.email=[email] --params.login.password=[pass]
```

You can use Vagrantfile included at this project to start a VM with all dependecies provisioned. 
