var DNA = require("organic").DNA
var loader = require("../index")

describe("DNA", function(){
  var dna

  beforeEach(function(){
    dna = new DNA()
  })

  it("should load dna data from json", function(next){
    loader.loadFile(dna, __dirname+ "/data/dna.json", function(err){
      expect(err).toBeFalsy()
      expect(dna.membrane2).toBeDefined();
      expect(dna.membrane2.organel1).toBeDefined();
      expect(dna.membrane2.organel1.source).toBeDefined();
      next();
    });
  });

  it("should load dna data from json at targetBranch", function(next){
    loader.loadFile(dna, __dirname+ "/data/membrane3.json", "test.membrane3.jsonvalue", function(err){
      expect(err).toBeFalsy()
      expect(dna.test.membrane3).toBeDefined();
      expect(dna.test.membrane3.jsonvalue.organel1).toBeDefined();
      expect(dna.test.membrane3.jsonvalue.organel1.source).toBeDefined();
      next();
    });
  });

  it("should load dna data from folder", function(next){
    loader.loadDir(dna, __dirname+ "/data/dna", function(err){
      expect(err).toBeFalsy()
      expect(dna.plasma).toBeDefined();
      expect(dna.plasma.organel1).toBeDefined();
      expect(dna.plasma.organel1.source).toBeDefined();
      expect(dna.membrane).toBeDefined();
      expect(dna.membrane.organel1).toBeDefined();
      expect(dna.membrane.organel1.type).toBeDefined();
      expect(dna.development.membrane).toBeDefined();
      expect(dna.development.membrane.organel2).toBeDefined();
      expect(dna.development.membrane.organel2.source).toBeDefined();
      next();
    });
  });
})