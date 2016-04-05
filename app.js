(function () {
  const CONTAINER_CLASS = "eager-embeddit"
  const CONFIG = {
    element: "." + CONTAINER_CLASS,
    dark: false,
    both: false,
    service: "reddit",
    loadMore: true,
    infiniteScroll: true,
    limit: 5,
    debug: process.env.NODE_ENV === "development"
  }

  let element
  let options = INSTALL_OPTIONS

  function updateElement() {
    element = Eager.createElement(options.location, element)
    element.classList.add(CONTAINER_CLASS)

    const {pathname} = window.location
    let {href} = window.location

    if (Eager.siteId === "preview") {
      const [encodedDomain] = href.split(".p.eager.works")

      const decodedDomain = encodedDomain
        .replace(/(s_www|h_www)/, "www")
        .replace(/_/g, ".")

      href = decodedDomain + pathname
      console.log(href)
    }

    Embedd.init({...CONFIG,
      url: href
    })
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
