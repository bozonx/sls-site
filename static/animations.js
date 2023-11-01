(() => {

  // TODO: на событие

  const breakPoint = 1024
  const windowWidth = window.innerWidth
  const topBarDrawerSwitchId = 'topbar-drawer-switch'
  const sideBarDrawerSwitchId = 'sidebar-drawer-switch'
  const appDrawerId = 'app-drawer'
  const themeBtnClass = 'thememode-btn'
  const topBarDrawerSwitch = document.getElementById(topBarDrawerSwitchId)
  const sideBarDrawerSwitch = document.getElementById(sideBarDrawerSwitchId)
  const themeBtns = document.getElementsByClassName(themeBtnClass)
  const appDrawer = document.getElementById(appDrawerId)
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

  for (const item of themeBtns) {
    item.onclick = handleThemeBtnClick
  }

  window.onresize = (event) => {
    console.log(event.target.innerWidth)
    if (event.target.innerWidth > breakPoint) {
      openDrawer()
    }
    else {
      closeDrawer()
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
  }
  function openDrawer() {
    isOpen = false

    appDrawer.setAttribute('style', 'display: block;')
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
})()
