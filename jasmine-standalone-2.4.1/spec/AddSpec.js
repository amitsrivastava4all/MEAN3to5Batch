// Suite
describe("AddTestSuite", function() {

 // Test Case
  it("Add Two Numbers", function() {
    var a= 10;
    var b = 20;
    var expectedValue = 30;
    var result = add(a,b);
    expect(expectedValue).toBe(result);
  });

    it("Add Two String Number", function() {
        var a= "10";
        var b = "20";
        var expectedValue = 30;
        var result = add(a,b);
        expect(expectedValue).toBe(result);
    });
    it("Add Two String Characters", function() {
        var a= "ten";
        var b = "One";
        var expectedValue = 0;
        var result = add(a,b);
        expect(expectedValue).toBe(result);
    });


});
