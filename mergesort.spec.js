describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2]) ).toEqual( [ [1], [2] ] );
    expect(split( [1, 2, 3] )).toEqual( [[1], [2, 3]] );
  });
});

describe('Merge Array function', function() {
  it('is able to merge two sorted arrays into one array', function() {
    expect(merge([1, 5, 6], [2, 3, 4])).toEqual([1, 2, 3, 4, 5, 6]);
  })
});
