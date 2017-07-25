(function () {
  if (!window.addEventListener) return // Check for IE9+

  const CONTAINER_CLASS = 'cf-embeddit'
  const CONFIG = {
    element: '.' + CONTAINER_CLASS,
    dark: false,
    both: false,
    service: 'reddit',
    loadMore: true,
    limit: 5,
    debug: process.env.NODE_ENV === 'development'
  }

  let element
  let options = INSTALL_OPTIONS

  function updateElement () {
    let url = window.location

    if (INSTALL_ID === 'preview') {
      const {host, path, scheme} = INSTALL.proxy.originalURL.parsed
      url = INSTALL_ID === 'preview' ? `${scheme}://${host}${path}` : window.location
    }

    element = INSTALL.createElement(options.location, element)
    element.setAttribute('app', 'embeddit')
    element.className = CONTAINER_CLASS

    window.Embedd.init({...CONFIG, url})
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement)
  } else {
    updateElement()
  }

  window.INSTALL_SCOPE = {
    setOptions (nextOptions) {
      options = nextOptions

      updateElement()
    }
  }
}())
