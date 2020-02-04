
export default {
  manhattan: function(dx, dy) {
      return dx + dy;
  },
  euclidean: function(dx, dy) {
      return Math.sqrt(dx * dx + dy * dy);
  },
  octile: function(dx, dy) {
      let F = Math.SQRT2 - 1;
      return (dx < dy) ? F * dx + dy : F * dy + dx;
  },
  chebyshev: function(dx, dy) {
      return Math.max(dx, dy);
  }
};
