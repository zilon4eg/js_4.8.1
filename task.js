const reveals = document.querySelectorAll('.reveal');

// обрабатываем скролл на всей странице
document.addEventListener('scroll', function(event) {
    // реагируем на событие
    let viewPortHeight = window.innerHeight;

    reveals.forEach(function(reveal) {
    
        let revTop = reveal.getBoundingClientRect().top;
        let revBottom = reveal.getBoundingClientRect().bottom;
        let revHeight = reveal.getBoundingClientRect().height;

        console.log(`500, top=${revTop}, viewPor=${viewPortHeight}`)
        
        if (
            (0 <= revTop) && (revTop <= viewPortHeight) ||
            (-200 <= revBottom) && (revBottom <= viewPortHeight - revHeight)
            ) {
            reveal.classList.add('reveal_active');
        }
        else {
            reveal.classList.remove('reveal_active');
        }
    
    });

  });