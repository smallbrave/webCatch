const request = function (url, options) {
  const defaults = {
    url,
    data: options.data,
    type: options.type || 'GET',
    dataType: options.dataType || 'json',
    async: options.async || true,
    contentType: options.contentType || 'application/json',
    success: options.success || function () {},
    error: options.error || null
  };
  const ajaxConfig = {
    url: defaults.url,
    data: defaults.data,
    type: defaults.type,
    dataType: defaults.dataType,
    async: defaults.async,
    contentType: defaults.contentType,
    success: function (res, status, xhr) {
      defaults.success.call(xhr, {
        code: 1,
        data: res
      });
    },
    error: function (xhr, error) {
      console.log(error);
    }
  };

  return $.ajax(ajaxConfig);
};