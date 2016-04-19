(function () {
  const CONTAINER_CLASS = "eager-embeddit"
  const CONFIG = {
    element: "." + CONTAINER_CLASS,
    dark: false,
    both: false,
    service: "reddit",
    loadMore: true,
    limit: 5,
    debug: process.env.NODE_ENV === "development"
  }

  let element
  let options = INSTALL_OPTIONS

  function updateElement() {
    const {host, path, scheme} = Eager.proxy.originalURL.parsed

    element = Eager.createElement(options.location, element)
    element.classList.add(CONTAINER_CLASS)

    const url = Eager.siteId === "preview" ? `${scheme}://${host}${path}` : window.location

    Embedd.init({...CONFIG, url})
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement)
  }
  else {
    updateElement()
  }

  INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions

      updateElement()
    }
  }
}())
