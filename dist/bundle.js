(function () {
  s = "hello world";
  x = 28657;

  var _$0 = Date.now();

  if (typeof _$0 !== "number") {
    throw new Error("Prepack model invariant violation: " + _$0);
  }

  result = _$0 === 0 ? 55 : _$0;
})();