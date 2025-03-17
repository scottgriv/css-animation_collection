jQuery(document).on('scroll', (e) => {
    if ((window.innerHeight + window.pageYOffset + 350) <= document.body.offsetHeight && document.documentElement.scrollTop > 350) {
      console.log('now');
      jQuery('.ast-below-header-bar').addClass('filter');
    } else {
      console.log('no');
      jQuery('.ast-below-header-bar').removeClass('filter');
    }
  })