export const getQueryString = name => {
  var urlstr = window.location.href;
  if (!!urlstr == true) {
    var str = urlstr.split("?")[1];
    if (!!str == false) return null;
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = str.match(reg);
    if (r != null) return unescape(r[2]).split("#")[0];
  }
  return null;
};
/**
 * 深拷贝
 * @param {*} obj 拷贝对象(object or array)
 * @param {*} cache 缓存数组
 */
export const deepCopy = function(obj, cache = []) {
  // typeof [] => 'object'
  // typeof {} => 'object'
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  // 如果传入的对象与缓存的相等, 则递归结束, 这样防止循环
  /**
   * 类似下面这种
   * var a = {b:1}
   * a.c = a
   * 资料: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
   */
  const hit = cache.filter(c => c.original === obj)[0];
  if (hit) {
    return hit.copy;
  }

  const copy = Array.isArray(obj) ? [] : {};
  // 将copy首先放入cache, 因为我们需要在递归deepCopy的时候引用它
  cache.push({
    original: obj,
    copy
  });
  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy;
};
