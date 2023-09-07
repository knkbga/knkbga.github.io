$(document).ready(function () {
  const hamburger = document.querySelector(".hamburger")
  const nav_menu = document.querySelector(".nav-menu")
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    nav_menu.classList.toggle("active")
  })
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    nav_menu.classList.remove("active")
  }))

  /** Scrolls the element into view
   * Manually created since Safari does not support the native one inside an iframe
  */
  function scrollElementIntoView(element, behavior) {

    let scrollTop = window.pageYOffset || element.scrollTop

    // Furthermore, if you have for example a header outside the iframe 
    // you need to factor in its dimensions when calculating the position to scroll to
    const headerOutsideIframe = window.parent.document.getElementsByClassName('myHeader')[0].clientHeight

    const finalOffset = element.getBoundingClientRect().top + scrollTop + headerOutsideIframe

    window.parent.scrollTo({
      top: finalOffset,
      behavior: behavior || 'auto'
    })
  }

  function scrollToSectionID(sectionID) {
    const element = document.getElementById(`${sectionID}`)
    scrollElementIntoView(element, 'smooth')
  }
})