const apiConvert = () => {
  fetch('https://openapi.programming-hero.com/api/ai/tools')
      .then(res => res.json())
      .then(data => getData(data.data))

};


const getData = (allData) => {
  // console.log(allData.tools)

  firstSix = allData.tools.slice(0, 6);
  allDataLoad = allData.tools.slice(7, 100);

  firstSix.forEach((pera) => {
      const { id, features, image, name, published_in } = pera;
      const mainDiv = document.getElementById('main_containerBy_card');
      const div = document.createElement('div');
      div.innerHTML = `
      <div class="card w-90 bg-base-100 shadow-lg border p-5 gap-5">
      <figure><img src="${image}" alt="Shoes" /></figure>
      <div class="card-body">
          <h2 class="card-title">Futures</h2>
          <ul class="list-decimal">
              <li>${features[0]}</li>
              <li>${features[1]}</li>
              <li>${features[2]}</li>
          </ul>
          <hr>
          <h2 class="font-bold text-3xl">${name}</h2>
          <div class="card-actions justify-between items-center">
              <p>
                  <p class="font-semibold">${published_in}</p>
              </p>
              <label onclick=showSingleModal('${id}') for="my-modal-5" class=""><img src="./image/Group 31.png" alt=""></label>
            
          </div>
      </div>
  </div>
      `;
      mainDiv.appendChild(div)
      

  });
  document.getElementById('showAllBtn').addEventListener('click', function () {
      firstSix = allData.tools.slice(0, 6);
      allDataLoad = allData.tools.slice(7, 100);
      const showBtn = document.getElementById('showAllBtn');

      allDataLoad.forEach((pera) => {
          const { features, image, name, published_in } = pera;
          const mainDiv = document.getElementById('main_containerBy_card');
          const div = document.createElement('div');
          div.innerHTML = `
          <div class="card w-90 bg-base-100 shadow-lg border p-5 gap-5">
          <figure><img src="${image}" alt="Shoes" /></figure>
          <div class="card-body">
              <h2 class="card-title">Futures</h2>
              <ul class="list-decimal">
                  <li>${features[0]}</li>
                  <li>${features[1]}</li>
                  <li>${features[2]}</li>
              </ul>
              <hr>
              <h2 class="font-bold text-3xl">${name}</h2>
              <div class="card-actions justify-between items-center">
                  <p>
                      <p class="font-semibold">${published_in}</p>
                  </p>
                  
                  <label  for="my-modal-5" class=""><img src="./image/Group 31.png" alt=""></label>
              </div>
          </div>
      </div>
          `;
          mainDiv.appendChild(div)
         

      })

      //   now will do button handler 
  });

};


const showSingleModal = (id) => {
  const url = 
  `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => showModal(data.data))

}

const showModal = (singleData) =>{
  console.log(singleData.features[1].feature_name)
  const {} = singleData;
 const modelContainer = document.getElementById('model-container');

 const cardTitle = document.getElementById('cardTitle');
  cardTitle.innerHTML = `<h2>${singleData.description}</h2>`;

  // const price1 = document.getElementById('price1');
  document.getElementById('price1').innerHTML = `<h1  class="font-semibold text-green-600">${singleData.pricing[0].plan}</h1><h2  class="font-semibold text-green-600">${singleData.pricing[0].price}</h2>`;

  document.getElementById('price2').innerHTML = `<h1 class="font-semibold text-orange-600">${singleData.pricing[1].plan}</h1><h2 class="font-semibold text-orange-600">${singleData.pricing[1].price}</h2>`;

  document.getElementById('price3').innerHTML = `<h2 class="font-semibold text-blue-600">${singleData.pricing[2].price}</h2>`;

  document.getElementById('f1').innerHTML=`<ul class="list-decimal">
  <li>${singleData.features[1].feature_name}</li>
  <li>${singleData.features[2].feature_name}</li>
  <li>${singleData.features[3].feature_name}</li>
  </ul>`;
  document.getElementById('i1').innerHTML=`<ul class="list-decimal">
  <li>${singleData.integrations[0]}</li>
  <li>${singleData.integrations[1]}</li>
  <li>${singleData.integrations[2]}</li>
  </ul>`;

  document.getElementById('img').innerHTML=`
   <img src="${singleData.image_link[0]}">
  `;
  document.getElementById('titleByImg').innerHTML= `${singleData.input_output_examples[0].input}`;
  document.getElementById('output').innerHTML= `${singleData.input_output_examples[0].output}`;
  // document.getElementById('').innerHTML= `${}`;
  // document.getElementById('').innerHTML= `${}`;

}

apiConvert();
