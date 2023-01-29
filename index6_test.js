
var expect = chai.expect;

describe('ProjectTests', function() {
    describe('#Player, constructor', function(){
        it('should instantiate a new Player', function(){
            var x = new Player(Benjamin);
            expect(x).to.equal(Benjamin);
        });
        it('should throw an error if (argument) is not a string', function(){
            expect(function(){
                 new Player (1234);
            }).to.throw(Error);
        });
    });
});
