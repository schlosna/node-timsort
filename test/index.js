'use strict';

var assert = require('assert');

var TimSort = require('../index.js');
var ArrayGenerator = require('./array-generator.js');

var lengths = [10, 100, 1000, 10000];
var repetitions = 10;

function numberCompare(a, b) {
  return a - b;
}

describe('Sort a Random Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.randomInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort a Descending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.descendingInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort an Ascending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.ascendingInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort an Ascending Array with 3 Random Exchanges', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.ascending3RandomExchangesInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort an Ascending Array with 10 Random Elements at Last', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.ascending10RandomEndInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort an Array of all Equal Elements', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.allEqualInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort an Array with Many Duplicates', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.manyDuplicateInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort an Array with Some Duplicates', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.someDuplicateInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort Subrange of a Random Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.randomInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, numberCompare, lo, hi);
        arr2.sort(numberCompare);

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe('Sort Subrange of a Descending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.descendingInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, numberCompare, lo, hi);
        arr2.sort(numberCompare);

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe('Sort Subrange of an Ascending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.ascendingInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, numberCompare, lo, hi);
        arr2.sort(numberCompare);

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe(
  'Sort Subrange of an Ascending Array with 3 Random Exchanges',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var lo = parseInt(length / 4);
          var hi = length - lo;
          var arr1 = ArrayGenerator.ascending3RandomExchangesInt(length);
          var arr2 = arr1.slice(lo, hi);

          TimSort.sort(arr1, numberCompare, lo, hi);
          arr2.sort(numberCompare);

          var j = 0;
          while (lo + j < hi) {
            assert.equal(arr1[lo + j], arr2[j]);
            j++;
          }
        }
      });

    });
  });

describe(
  'Sort Subrange of an Ascending Array with 10 Random Elements at Last',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var lo = parseInt(length / 4);
          var hi = length - lo;
          var arr1 = ArrayGenerator.ascending10RandomEndInt(length);
          var arr2 = arr1.slice(lo, hi);

          TimSort.sort(arr1, numberCompare, lo, hi);
          arr2.sort(numberCompare);

          var j = 0;
          while (lo + j < hi) {
            assert.equal(arr1[lo + j], arr2[j]);
            j++;
          }
        }
      });

    });
  });

describe('Sort Subrange of an Array of all Equal Elements', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.allEqualInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, numberCompare, lo, hi);
        arr2.sort(numberCompare);

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe('Sort Subrange of an Array with Many Duplicates', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.manyDuplicateInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, numberCompare, lo, hi);
        arr2.sort(numberCompare);

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe('Sort Subrange of an Array with Some Duplicates', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.someDuplicateInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, numberCompare, lo, hi);
        arr2.sort(numberCompare);

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe('Lexicographically Sort a Random Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.randomInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1);
        arr2.sort();

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Lexicographically Sort a Descending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.descendingInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1);
        arr2.sort();

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Lexicographically Sort an Ascending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.ascendingInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1);
        arr2.sort();

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe(
  'Lexicographically Sort an Ascending Array with 3 Random Exchanges',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var arr1 = ArrayGenerator.ascending3RandomExchangesInt(length);
          var arr2 = arr1.slice();

          TimSort.sort(arr1);
          arr2.sort();

          assert.deepEqual(arr1, arr2);
        }
      });

    });
  });

describe(
  'Lexicographically Sort an Ascending Array with 10 Random Elements at Last',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var arr1 = ArrayGenerator.ascending10RandomEndInt(length);
          var arr2 = arr1.slice();

          TimSort.sort(arr1);
          arr2.sort();

          assert.deepEqual(arr1, arr2);
        }
      });

    });
  });

describe('Lexicographically Sort an Array of all Equal Elements', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.allEqualInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1);
        arr2.sort();

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Lexicographically Sort an Array with Many Duplicates', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.manyDuplicateInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1);
        arr2.sort();

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Lexicographically Sort an Array with Some Duplicates', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.someDuplicateInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1);
        arr2.sort();

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Lexicographically Sort Subrange of a Random Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.randomInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, lo, hi);
        arr2.sort();

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe('Lexicographically Sort Subrange of a Descending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.descendingInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, lo, hi);
        arr2.sort();

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe('Lexicographically Sort Subrange of an Ascending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.ascendingInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, lo, hi);
        arr2.sort();

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe(
  'Lexicographically Sort Subrange of an Ascending ' +
  'Array with 3 Random Exchanges',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var lo = parseInt(length / 4);
          var hi = length - lo;
          var arr1 = ArrayGenerator.ascending3RandomExchangesInt(length);
          var arr2 = arr1.slice(lo, hi);

          TimSort.sort(arr1, lo, hi);
          arr2.sort();

          var j = 0;
          while (lo + j < hi) {
            assert.equal(arr1[lo + j], arr2[j]);
            j++;
          }
        }
      });

    });
  });

describe(
  'Lexicographically Sort Subrange of an Ascending Array ' +
  'with 10 Random Elements at Last',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var lo = parseInt(length / 4);
          var hi = length - lo;
          var arr1 = ArrayGenerator.ascending10RandomEndInt(length);
          var arr2 = arr1.slice(lo, hi);

          TimSort.sort(arr1, lo, hi);
          arr2.sort();

          var j = 0;
          while (lo + j < hi) {
            assert.equal(arr1[lo + j], arr2[j]);
            j++;
          }
        }
      });

    });
  });

describe(
  'Lexicographically Sort Subrange of an Array of all Equal Elements',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var lo = parseInt(length / 4);
          var hi = length - lo;
          var arr1 = ArrayGenerator.allEqualInt(length);
          var arr2 = arr1.slice(lo, hi);

          TimSort.sort(arr1, lo, hi);
          arr2.sort();

          var j = 0;
          while (lo + j < hi) {
            assert.equal(arr1[lo + j], arr2[j]);
            j++;
          }
        }
      });

    });
  });

describe(
  'Lexicographically Sort Subrange of an Array with Many Duplicates',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var lo = parseInt(length / 4);
          var hi = length - lo;
          var arr1 = ArrayGenerator.manyDuplicateInt(length);
          var arr2 = arr1.slice(lo, hi);

          TimSort.sort(arr1, lo, hi);
          arr2.sort();

          var j = 0;
          while (lo + j < hi) {
            assert.equal(arr1[lo + j], arr2[j]);
            j++;
          }
        }
      });

    });
  });

describe(
  'Lexicographically Sort Subrange of an Array with Some Duplicates',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var lo = parseInt(length / 4);
          var hi = length - lo;
          var arr1 = ArrayGenerator.someDuplicateInt(length);
          var arr2 = arr1.slice(lo, hi);

          TimSort.sort(arr1, lo, hi);
          arr2.sort();

          var j = 0;
          while (lo + j < hi) {
            assert.equal(arr1[lo + j], arr2[j]);
            j++;
          }
        }
      });

    });
  });

describe('Sort problematic arrays', function () {
  it('Should sort array with some duplicates', function () {
    // https://github.com/brython-dev/brython/pull/828/files
    var input = [
      1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 0.5, 0.5, 1.0,
      0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 0.5, 1.0, 0.5,
      0.5, 0.5, 0.5, 0.5, 1.0, 0.5, 1.0, 0.5, 0.5, 0.5,
      0.6, 1.0
    ];
    var expected = input.slice();
    expected.sort(numberCompare);

    var output = input.slice();
    TimSort.sort(output, numberCompare);
    assert.deepEqual(expected, output);
  });

  it('Should sort array with some duplicates and custom comparator', function () {
    // https://gist.github.com/stropitek/a171cafda73379e7ea5be86c8a4e741a
    var input = [
      1487868586378,
      1487857485296,
      '2016-06-10T11:15:13.000Z',
      '2008-05-16T11:57:27.000Z',
      '2008-05-16T11:57:27.000Z',
      '2008-05-16T11:57:27.000Z',
      '2008-05-16T11:57:32.000Z',
      '2008-05-16T11:57:31.000Z',
      '2008-05-16T11:57:31.000Z',
      '2008-05-16T11:57:31.000Z',
      '2008-05-16T11:57:31.000Z',
      '2008-05-16T11:57:31.000Z',
      '2008-05-16T11:57:31.000Z',
      '2008-05-16T11:57:31.000Z',
      '2008-05-16T11:57:31.000Z',
      '2008-05-16T11:57:31.000Z',
      '2008-05-16T11:57:27.000Z',
      '2008-05-16T11:57:27.000Z',
      '2008-05-16T11:57:27.000Z',
      '2008-05-16T11:57:27.000Z',
      '2008-05-16T11:57:27.000Z',
      '2008-05-16T11:57:13.000Z',
      '2008-05-16T11:57:13.000Z',
      '2008-05-16T11:57:13.000Z',
      '2008-05-16T11:57:12.000Z',
      '2008-05-16T11:57:12.000Z',
      1485944753582,
      1485871296146,
      1485871143711,
      1484125236275,
      1484069406406,
      '2008-05-16T11:57:41.000Z'
    ];

    var comparator = function (a, b) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0
    }

    var expected = input.slice();
    expected.sort(comparator);

    var output = input.slice();
    TimSort.sort(output, comparator);
    assert.deepEqual(expected, output);
  });

});

describe('Sort random arrays with lengths near power of two', function () {
  lengths = [];
  for (let i = 1; i <= 1048576; i *= 2) {
    lengths.push(i - 1);
    lengths.push(i);
    lengths.push(i + 1);
  }

  lengths.forEach(function(length) {
    var iterations = Math.max(1, Math.round(100000 / (length + 1)));
    it('Should sort a size ' + length + ' array ' + iterations + ' times', function() {
      for (var i = 0; i < iterations; i++) {
        var arr1 = ArrayGenerator.randomInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });
  });
});