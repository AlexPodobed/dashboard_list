describe('utils.filters', function () {
    var $filter;
    var testStr = "This is example";

    function getMatches(result, findStr) {
        return result.match(new RegExp('<span class="highlighted">' + findStr + '</span>', 'gi')) || [];
    }

    beforeEach(module('dashboardList'));

    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_;
    }));

    it('should insert <span class="highlighted"> when found matches', function () {
        var findStr = "is";
        var result, matches;

        result = $filter('highlight')(testStr, findStr);
        result = result.$$unwrapTrustedValue();
        matches = getMatches(result, findStr);

        expect(matches.length).toBe(2);
    });

    it('should return the same text if matched were not found', function () {
        var findStr = "zzzz";
        var result, matches;

        result = $filter('highlight')(testStr, findStr);
        result = result.$$unwrapTrustedValue();
        matches = getMatches(result, findStr);

        expect(matches.length).toBe(0);
        expect(result).toEqual(testStr);
    });
});
