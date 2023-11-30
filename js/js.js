$(document).ready(function () {
    $('.nav-mobile__icon').click(function() {
        $('.nav-mobile__list').toggleClass('is-active');
    });
});

$(document).ready(function () {
    $('.grid__img').click(function() {
        $('.overlay').toggleClass('is-gallery');
    });
});

const oGallery = document.querySelector('.gallery');
oGallery.addEventListener('click', function(ev) {
  if (ev.target.tagName != 'IMG') { return false; };
  if (ev.target.className === 'user__photo') { return false; };
  let oTarget = ev.target, nWidth, nHeight, nRatio = oTarget.offsetWidth / oTarget.offsetHeight;
    let oBig = this.appendChild(document.createElement('DIV'));
    oBig.classList.add('showImg')
  oBig.style.position = `absolute`;
  oBig.style.top = `${oTarget.offsetTop}px`; oBig.style.left = `${oTarget.offsetLeft}px`;
  oBig.style.width = `${oTarget.offsetWidth}px`; oBig.style.height = `${oTarget.offsetHeight}px`;
  if (this.offsetHeight < this.offsetWidth) {
    nHeight = this.offsetHeight; nWidth = nHeight * nRatio;
  } else {
    nWidth = this.offsetWidth; nHeight = nWidth / nRatio;
  };
  oBig.style.background = `center / 100% 100% no-repeat url('${oTarget.currentSrc}')`;
  oBig.insertAdjacentHTML('afterend', '<div class="close"></div>');
    oBig.addEventListener('transitionend', function () { document.querySelector('.close').style.opacity = 1; });
    $('.close,.showImg').on('click', function (ev) {
        ev.stopPropagation();
        this.addEventListener('transitionend', function() { this.remove(); });
        this.style.transition = `.1s ease-in`;
        this.style.height = this.style.width = `0px`;
        $('.overlay').toggleClass('is-gallery');
        oGallery.classList.toggle('show', false);
        $('.showImg,.close').remove()
    })
  oBig.classList.toggle('active');
  oBig.style.width = `${nWidth / 1.3}px`; oBig.style.height = `${nHeight / 1.3}px`;
  oBig.style.top = `40%`;
    oBig.style.left = `50%`;
    oBig.style.position = `fixed`;
  oBig.style.transform = `translate(-50%, -50%) rotate(1turn)`;
  oGallery.classList.toggle('show', true);
});

$(window).resize(function() {
    if ($(window).width() < 481) {
        $('.grid').removeClass('gallery');
    }
}).resize();