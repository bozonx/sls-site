(() => {

  // TODO: на событие

  const breakPoint = 1024
  const windowWidth = window.innerWidth
  const topBarDrawerSwitchId = 'topbar-drawer-switch'
  const sideBarDrawerSwitchId = 'sidebar-drawer-switch'
  const appDrawerId = 'app-drawer'
  const topBarDrawerSwitch = document.getElementById(topBarDrawerSwitchId)
  const sideBarDrawerSwitch = document.getElementById(sideBarDrawerSwitchId)
  const appDrawer = document.getElementById(appDrawerId)
  let isOpen = breakPoint < windowWidth

  if (!isOpen) closeDrawer()

  topBarDrawerSwitch.onclick = switchDrawer
  sideBarDrawerSwitch.onclick = closeDrawer

  function switchDrawer() {
    isOpen = !isOpen

    if (isOpen) {
      appDrawer.setAttribute('style', 'display: block;')
    }
    else {
      appDrawer.setAttribute('style', 'display: none;')
    }
  }

  function closeDrawer() {
    isOpen = false

    appDrawer.setAttribute('style', 'display: none;')
  }
})()
