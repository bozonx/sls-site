(() => {

  // TODO: на событие

  const breakPoint = 1024
  const windowWidth = window.innerWidth
  const topBarDrawerSwitchId = 'topbar-drawer-switch'
  const sideBarDrawerSwitchId = 'sidebar-drawer-switch'
  const appDrawerId = 'app-drawer'
  const appDrawerBackdropId = 'app-drawer-backdrop'
  const themeBtnClass = 'thememode-btn'
  const imgModalClass = 'img-modal'
  const topBarDrawerSwitch = document.getElementById(topBarDrawerSwitchId)
  const sideBarDrawerSwitch = document.getElementById(sideBarDrawerSwitchId)
  const themeBtns = document.getElementsByClassName(themeBtnClass)
  const appDrawer = document.getElementById(appDrawerId)
  const appDrawerBackdrop = document.getElementById(appDrawerBackdropId)
  const storedColorScheme = localStorage.getItem('color-theme')
  const htmlTag = document.getElementsByTagName('html')[0]
  let isOpen = breakPoint < windowWidth

  if (!isOpen) closeDrawer()

  if (storedColorScheme === 'light') {
    htmlTag.className = 'light'
  }
  else if (storedColorScheme === 'dark') {
    htmlTag.className = 'dark'
  }
  else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      htmlTag.className = 'dark'

      localStorage.setItem('color-theme', 'dark')
    }
    else {
      htmlTag.className = 'light'

      localStorage.setItem('color-theme', 'light')
    }
  }

  topBarDrawerSwitch.onclick = switchDrawer
  sideBarDrawerSwitch.onclick = closeDrawer
  appDrawerBackdrop.onclick = closeDrawer

  document.getElementById('to-the-top')
    .onclick = () => window.scrollTo(0, 0)

  for (const item of themeBtns) {
    item.onclick = handleThemeBtnClick
  }

  window.onresize = (event) => {
    if (event.target.innerWidth > breakPoint) {
      if (!isOpen) openDrawer(true)
    }
    else {
      if (isOpen) closeDrawer()
    }
  }

  window.onscroll = (event) => {
    const classArr = document.getElementById('to-the-top').className
      .split(' ')
      .filter((item) => item !== 'hidden')

    if (window.scrollY > window.innerHeight / 2) {
      document.getElementById('to-the-top').className = classArr.join(' ')
    }
    else {
      document.getElementById('to-the-top').className = classArr.join(' ') + ' hidden'
    }
  }

  // list item
  for (const item of document.getElementsByClassName('page-list-item')) {
    const href = item.attributes['data-href'].nodeValue

    item.onclick = () => location.pathname = href
  }

  // images
  for (const item of document.getElementsByClassName('html-block')) {
    for (const img of item.getElementsByTagName('img')) {
      img.onclick = () => openImgModal(img.attributes['data-full'].nodeValue)
    }
  }

  function switchDrawer() {
    isOpen = !isOpen

    if (isOpen) {
      openDrawer()
    }
    else {
      closeDrawer()
    }
  }

  function closeDrawer() {
    isOpen = false

    appDrawer.setAttribute('style', 'display: none;')
    appDrawerBackdrop.className = 'hidden'
  }
  function openDrawer(onlyDrawer = false) {
    isOpen = true

    appDrawer.setAttribute('style', 'display: block;')

    if (!onlyDrawer) appDrawerBackdrop.className = ''
  }

  function handleThemeBtnClick() {
    const currentScheme = localStorage.getItem('color-theme')

    if (currentScheme === 'dark') {
      localStorage.setItem('color-theme', 'light')
      htmlTag.className = 'light'
    }
    else {
      localStorage.setItem('color-theme', 'dark')
      htmlTag.className = 'dark'
    }
  }

  function openImgModal(imgUrl) {
    const div = document.createElement("div");

    div.className = imgModalClass
    div.innerHTML = `<div><span>🗙</span></div><img src="${imgUrl}" alt="Enlarged image" />`

    document.getElementsByTagName('body')[0].prepend(div)

    div.onclick = () => div.remove()
  }
})()

/*

<!--
  {#if scrollY > windowHeight / 2}

{/if}
  -->
*/
