(function () {
  const fn = {
    init() {
      this.navMenu()
    },
    navMenu: function () {
      var navLis = fn.$('#topNavBar').querySelectorAll('.nav-item')
      navLis.forEach(element => {
        element.addEventListener('mouseenter', e => {
          element.children[1].classList.add('active')
        });
        element.addEventListener('mouseleave', e => {
          element.children[1].classList.remove('active')
        });
      });

      const navLitA = fn.$('#topNavBar').querySelectorAll('.nav-item a')
      navLitA.forEach(a => {
        a.addEventListener('click', e => {
          e.preventDefault();
          const targetId = e.target.getAttribute("href")
          const top = fn.$(targetId).offsetTop
          let currentY=window.scrollY
          // window.scrollTo(0, top - 100)
          fn.scroll(currentY,top-80)
        })
      })
    },

    scroll(currentY, targetY) {
      // 计算需要移动的距离

      let needScrollTop = targetY - currentY

      let _currentY = currentY
      const timer = setTimeout(() => {
        // 一次调用滑动帧数，每次调用会不一样
        const dist = Math.ceil(needScrollTop / 2)
        _currentY += dist
        window.scrollTo(_currentY, currentY)
        // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
        if (needScrollTop > 2 || needScrollTop < -2) {
          fn.scroll(_currentY, targetY)
        } else {
          window.scrollTo(_currentY, targetY)
          clearTimeout(timer)
        }
      }, 16)
    },
    $(ele) {
      return document.querySelector(ele)
    },
    $$(ele) {
      return document.querySelectorAll(ele)
    },

  }
  fn.init()
})()