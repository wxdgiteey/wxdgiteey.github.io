(function(window, undefined) { 
    let t = null 
    $.fn.lazyLoad = function() {
        let imgs = this 
        function lazyLoad() { 
            if (t) return
            t = setTimeout(() => {
                let windowH = window.innerHeight || document.documentElement.clientHeight
                let scrollH = document.body.scrollTop || document.documentElement.scrollTop
                let showH = windowH + scrollH 
                for (let i = 0; i < imgs.length; i++) {
                    if (imgs[i].offsetTop < showH) {
                        imgs[i].src = imgs[i].getAttribute('data-original')
                    }
                }
                t = null
            }, 500)
        }
        lazyLoad() 
        window.onscroll = lazyLoad 
    }
})(window)