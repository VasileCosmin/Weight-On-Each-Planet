// const space = {
//   mercury:{
//       gravity:0.38,
//       image:"mercury.png"
//   },
//   venus:{
//       gravity:0.91,
//       image:"venus.png"
//   },
//   earth:{
//       gravity:1.0,
//       image:"earth.png"
//   },
//   mars:{
//       gravity:0.38,
//       image:"mars.png"
//   },
//   jupiter:{
//       gravity:2.34,
//       image:"jupiter.png"
//   },
//   saturn:{
//       gravity:0.93,
//       image:"saturn.png"
//   },
//   uranus:{
//       gravity:0.92,
//       image:"uranus.png"
//   },
//   neptune:{
//       gravity:1.12,
//       image:"neptune.png"
//   }
// }

const input = document.querySelector('#mass');
const select = document.querySelector('select');
const submit = document.querySelector('#submit');
const container = document.querySelector('.flex-container');
const description = document.querySelector('.description-container')

submit.addEventListener('click', () => {
  let val = input.value;
  if(typeof(Number(val)) === "number" && Number(val) > 0) {
    if(select.value === 'none') {
      container.innerHTML = '';
      container.display = 'flex';
      input.value = '';
      container.style.display = 'block';
      let p = document.createElement('p');
      p.textContent = 'You did not select a planet yet';
      p.style.backgroundColor = 'rgba(169, 169, 169, 0.2)';
      p.style.display = 'flex';
      p.style.justifyContent = 'center';
      p.style.alignItems = 'center';
      p.style.margin = '0 200px';
      p.style.padding = '20px 0';
      p.style.fontSize = '24px';
      container.appendChild(p);
    }else if(select.value === 'mercury') {
      container.innerHTML = '';
      container.style.display = 'flex';
      description.innerHTML = '';
      input.value = '';
      
      let gravity = 3.7;
      let image = document.createElement('img');
      image.src = './images/mercury.png';

      let text = document.createElement('p');
      text.textContent = `The weight(rounded) of the object on ${select.value.toUpperCase()}`
      text.className = 'description';

      let weight = document.createElement('p');
      weight.textContent = `${Math.floor(Number(val) * gravity)}N`;
      weight.className = 'weight';

      description.appendChild(text);
      description.appendChild(weight);
      container.appendChild(image);
      container.appendChild(description);
    }else if(select.value === 'venus') {
      container.innerHTML = '';
      description.innerHTML = '';
      input.value = '';
      
      let gravity = 8.87;
      let image = document.createElement('img');
      image.src = './images/venus.png';

      let text = document.createElement('p');
      text.textContent = `The weight(rounded) of the object on ${select.value.toUpperCase()}`
      text.className = 'description';

      let weight = document.createElement('p');
      weight.textContent = `${Math.floor(Number(val) * gravity)}N`;
      weight.className = 'weight';

      description.appendChild(text);
      description.appendChild(weight);
      container.appendChild(image);
      container.appendChild(description);
    }else if(select.value === 'earth') {
      container.innerHTML = '';
      description.innerHTML = '';
      input.value = '';
      
      let gravity = 9.8;
      let image = document.createElement('img');
      image.src = './images/earth.png';

      let text = document.createElement('p');
      text.textContent = `The weight(rounded) of the object on ${select.value.toUpperCase()}`
      text.className = 'description';

      let weight = document.createElement('p');
      weight.textContent = `${Math.floor(Number(val) * gravity)}N`;
      weight.className = 'weight';

      description.appendChild(text);
      description.appendChild(weight);
      container.appendChild(image);
      container.appendChild(description);
    }else if(select.value === 'mars') {
      container.innerHTML = '';
      description.innerHTML = '';
      input.value = '';
      
      let gravity = 3.721;
      let image = document.createElement('img');
      image.src = './images/mars.png';

      let text = document.createElement('p');
      text.textContent = `The weight(rounded) of the object on ${select.value.toUpperCase()}`
      text.className = 'description';

      let weight = document.createElement('p');
      weight.textContent = `${Math.floor(Number(val) * gravity)}N`;
      weight.className = 'weight';

      description.appendChild(text);
      description.appendChild(weight);
      container.appendChild(image);
      container.appendChild(description);
    }else if(select.value === 'jupiter') {
      container.innerHTML = '';
      description.innerHTML = '';
      input.value = '';
      
      let gravity = 24.79;
      let image = document.createElement('img');
      image.src = './images/jupiter.png';

      let text = document.createElement('p');
      text.textContent = `The weight(rounded) of the object on ${select.value.toUpperCase()}`
      text.className = 'description';

      let weight = document.createElement('p');
      weight.textContent = `${Math.floor(Number(val) * gravity)}N`;
      weight.className = 'weight';

      description.appendChild(text);
      description.appendChild(weight);
      container.appendChild(image);
      container.appendChild(description);
    }else if(select.value === 'saturn') {
      container.innerHTML = '';
      description.innerHTML = '';
      input.value = '';
      
      let gravity = 10.44;
      let image = document.createElement('img');
      image.src = './images/saturn.png';

      let text = document.createElement('p');
      text.textContent = `The weight(rounded) of the object on ${select.value.toUpperCase()}`
      text.className = 'description';

      let weight = document.createElement('p');
      weight.textContent = `${Math.floor(Number(val) * gravity)}N`;
      weight.className = 'weight';

      description.appendChild(text);
      description.appendChild(weight);
      container.appendChild(image);
      container.appendChild(description);
    }else if(select.value === 'uranus') {
      container.innerHTML = '';
      description.innerHTML = '';
      input.value = '';
      
      let gravity = 8.87;
      let image = document.createElement('img');
      image.src = './images/uranus.png';

      let text = document.createElement('p');
      text.textContent = `The weight(rounded) of the object on ${select.value.toUpperCase()}`
      text.className = 'description';

      let weight = document.createElement('p');
      weight.textContent = `${Math.floor(Number(val) * gravity)}N`;
      weight.className = 'weight';

      description.appendChild(text);
      description.appendChild(weight);
      container.appendChild(image);
      container.appendChild(description);
    }else if(select.value === 'neptune') {
      container.innerHTML = '';
      description.innerHTML = '';
      input.value = '';
      
      let gravity = 11.15;
      let image = document.createElement('img');
      image.src = './images/neptune.png';

      let text = document.createElement('p');
      text.textContent = `The weight(rounded) of the object on ${select.value.toUpperCase()}`
      text.className = 'description';

      let weight = document.createElement('p');
      weight.textContent = `${Math.floor(Number(val) * gravity)}N`;
      weight.className = 'weight';

      description.appendChild(text);
      description.appendChild(weight);
      container.appendChild(image);
      container.appendChild(description);
    }else if(select.value === 'pluto') {
      container.innerHTML = '';
      description.innerHTML = '';
      input.value = '';
      
      let gravity = 0.62;
      let image = document.createElement('img');
      image.src = './images/pluto.png';

      let text = document.createElement('p');
      text.textContent = `The weight(rounded) of the object on ${select.value.toUpperCase()}`
      text.className = 'description';

      let weight = document.createElement('p');
      weight.textContent = `${Math.floor(Number(val) * gravity)}N`;
      weight.className = 'weight';

      description.appendChild(text);
      description.appendChild(weight);
      container.appendChild(image);
      container.appendChild(description);
    }

  } else if(val.length === 0) {
    container.innerHTML = '';
    input.value = '';
    container.style.display = 'block';
    let p = document.createElement('p');
    p.textContent = 'Mass is required';
    p.style.backgroundColor = 'rgba(169, 169, 169, 0.2)';
    p.style.display = 'flex';
    p.style.justifyContent = 'center';
    p.style.alignItems = 'center';
    p.style.margin = '0 200px';
    p.style.padding = '20px 0';
    p.style.fontSize = '24px';
    container.appendChild(p);
} else if(typeof(val) === 'string') {
      container.innerHTML = '';
      input.value = '';
      container.style.display = 'block';
      let p = document.createElement('p');
      p.textContent = 'Mass should be a number';
      p.style.backgroundColor = 'rgba(169, 169, 169, 0.2)';
      p.style.display = 'flex';
      p.style.justifyContent = 'center';
      p.style.alignItems = 'center';
      p.style.margin = '0 200px';
      p.style.padding = '20px 0';
      p.style.fontSize = '24px';
      container.appendChild(p);
  }
})
