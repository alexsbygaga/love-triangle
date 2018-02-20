/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    for (i  = 0; i<=preferences.length; i++){
      var first = i+1;
      var second = preferences[i];
      var third = preferences[second-1];
      var fourth = preferences[third-1];
      if (first == fourth && second != third && third != fourth && second != fourth){
          count++;
      };
    }
    return (count/3);
};
