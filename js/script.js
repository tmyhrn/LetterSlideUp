const heading = document.querySelector('#heading');

const keyframe = {
  color: ['transparent', '#fff'],
  backgroundPosition: ['100% 0', '0 0'],
};

const options = {
  duration: 1000,
  easing: 'ease',
}

heading.animate(keyframe, options);