goog.addDependency("debug/error.js", ['goog.debug.Error'], []);
goog.addDependency("dom/nodetype.js", ['goog.dom.NodeType'], []);
goog.addDependency("string/string.js", ['goog.string', 'goog.string.Unicode'], []);
goog.addDependency("asserts/asserts.js", ['goog.asserts', 'goog.asserts.AssertionError'], ['goog.debug.Error', 'goog.dom.NodeType', 'goog.string']);
goog.addDependency("array/array.js", ['goog.array', 'goog.array.ArrayLike'], ['goog.asserts']);
goog.addDependency("labs/useragent/util.js", ['goog.labs.userAgent.util'], ['goog.string']);
goog.addDependency("labs/useragent/browser.js", ['goog.labs.userAgent.browser'], ['goog.array', 'goog.asserts', 'goog.labs.userAgent.util', 'goog.string']);
goog.addDependency("labs/useragent/engine.js", ['goog.labs.userAgent.engine'], ['goog.array', 'goog.labs.userAgent.util', 'goog.string']);
goog.addDependency("useragent/useragent.js", ['goog.userAgent'], ['goog.labs.userAgent.browser', 'goog.labs.userAgent.engine', 'goog.labs.userAgent.util', 'goog.string']);
goog.addDependency("dom/browserfeature.js", ['goog.dom.BrowserFeature'], ['goog.userAgent']);
goog.addDependency("dom/tagname.js", ['goog.dom.TagName'], []);
goog.addDependency("functions/functions.js", ['goog.functions'], []);
goog.addDependency("math/math.js", ['goog.math'], ['goog.array', 'goog.asserts']);
goog.addDependency("math/coordinate.js", ['goog.math.Coordinate'], ['goog.math']);
goog.addDependency("math/size.js", ['goog.math.Size'], []);
goog.addDependency("object/object.js", ['goog.object'], []);
goog.addDependency("dom/dom.js", ['goog.dom', 'goog.dom.Appendable', 'goog.dom.DomHelper'], ['goog.array', 'goog.asserts', 'goog.dom.BrowserFeature', 'goog.dom.NodeType', 'goog.dom.TagName', 'goog.functions', 'goog.math.Coordinate', 'goog.math.Size', 'goog.object', 'goog.string', 'goog.userAgent']);
goog.addDependency("dom/classes.js", ['goog.dom.classes'], ['goog.array']);
goog.addDependency("string/stringbuffer.js", ['goog.string.StringBuffer'], []);
goog.addDependency("dom/vendor.js", ['goog.dom.vendor'], ['goog.string', 'goog.userAgent']);
goog.addDependency("math/box.js", ['goog.math.Box'], ['goog.math.Coordinate']);
goog.addDependency("math/rect.js", ['goog.math.Rect'], ['goog.math.Box', 'goog.math.Coordinate', 'goog.math.Size']);
goog.addDependency("style/style.js", ['goog.style'], ['goog.array', 'goog.asserts', 'goog.dom', 'goog.dom.NodeType', 'goog.dom.vendor', 'goog.math.Box', 'goog.math.Coordinate', 'goog.math.Rect', 'goog.math.Size', 'goog.object', 'goog.string', 'goog.userAgent']);