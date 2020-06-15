window.addEventListener('load', function() {

  console.log(window.location)
  console.log(window.location.pathname)
  if (window.location.pathname !== "/") {
    console.log(window.location.pathname)
  }

  document.getElementById("a").addEventListener('click', function() {
    onNavigate('a')
    openPageA()
  })
  document.getElementById("b").addEventListener('click', function() {
    onNavigate('b')
    openPageB()
  })
  document.getElementById("c").addEventListener('click', function() {
    onNavigate('c')
    openPageC()
  })
  document.getElementById("d").addEventListener('click', function() {
    onNavigate('d')
    openPageD()
  })


  window.addEventListener('popstate', e => {
    //document.getElementById("navUsers").click
    console.log(e.state)
    if (e.state == 'a') {
        //onNavigate('a')
        openPageA()
    }
    if (e.state == 'b') {
        //onNavigate('b')
        openPageB()
    }
    if (e.state == 'c') {
        //onNavigate('c')
        openPageC()
    }
    if (e.state == 'd') {
        //onNavigate('d')
        openPageD()
    }
  })


  const rootDiv = document.getElementById('root');

})

const onNavigate = (pathname) => {
  //console.log(pathname)
  //console.log(window.location.origin)
  window.history.pushState(
    pathname,
    pathname,
    window.location.origin + "/" + pathname
  )
}

function openPageA() {
  console.log('page A opened')
  //console.log(window.location)
  console.log(window.location.pathname)
  document.getElementById('root').innerHTML = "Page location is " + window.location.href
}

function openPageB() {
  console.log('page B opened')
  //console.log(window.location)
  console.log(window.location.pathname)
  document.getElementById('root').innerHTML = "Page location is " + window.location.href
}

function openPageC() {
  console.log('page C opened')
  //console.log(window.location)
  console.log(window.location.pathname)
  document.getElementById('root').innerHTML = "Page location is " + window.location.href
}

function openPageD() {
  console.log('page D opened')
  //console.log(window.location)
  console.log(window.location.pathname)
  document.getElementById('root').innerHTML = "Page location is " + window.location.href
}