describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    arr=flatten(arr).sort();
	
	function flatten(arr) 
	{  
	return arr.reduce(function(explored, toExplore){return explored.concat(Array.isArray(toExplore)?flatten(toExplore):toExplore);}, []);
}
		
	expect(arr).toEqual(expected);
  });
});