const Migrations=artifacts.require("Migrations");
const Election = artifacts.require("Election");

module.exports= function(deployer){
    const candidateNames = ['BJP', 'INC', 'AAP','SP']; // Add your candidate names here
    const duration = 60;
    deployer.deploy(Election,candidateNames,duration);    

};