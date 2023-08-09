const heading = document.querySelector('#heading');

const keyframe = {
  color: ['#f66', '#fc2', '#0c6', '#0bd']
};

const options = {
  duration: 8000,
  direction: 'alternate',
  iterations: Infinity,
}

heading.animate(keyframe, options);