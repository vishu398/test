const UserTesting = artifacts.require("UserTesting");
const {expectRevert}= require("@openzeppelin/test-helpers");
const { beforeEach } = require("node:test");
 
contract("UserTesting",(accounts) => {
 
  beforeEach(async()=>{
   User= await user.new();
   
});
  
it("should create an owner", async () => {
  
});

});
