const form = document.querySelector('form');
const result = document.getElementById('result');
const map1=new Map();
map1.set('CLEAR SKY','https://images.unsplash.com/photo-1530530824905-661c2bb787f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=373&q=80')

function getShows(searchText) {

    // To remove all the childs in a result div
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=02663e862c6f710ae4f60587c827242d
    `;

    fetch(url)
        .then((res) => {
                    return res.json()

            
            // for (let item of res.data) {

            //     if (item.show.image) {
                    
            //         const img = document.createElement('img');

            //         img.src = item.show.image.medium;
            //         img.style.margin = '10px';
            //         result.append(img);

            //     }
               
            // }

        })
        .then((data)=>{
            console.log(data);
            //  for (let item of data) {        
                    let li = document.createElement('li');
                    li=`<li><span><i class="fas fa-flag"></i></span> ${data.name}</li>`
                    $('ul').append(li);
                    li=new Date(data.dt).toDateString();
                    $('ul').append(li);
                    li=`<li><span><i class="fas fa-temperature-down"></i></span> ${parseInt(data.main.temp_min-273)+"*C"}</li>`;
                    // temp_min.innerHTML=li+"*C";
                    // li=li+"*C";
                    $('ul').append(li);
                    // li=`<li><span><i class="fas fa-temperature-down"></i></span> ${parseInt(data.main.temp_min-273)+"*C" + "/" + parseInt(data.main.temp_max-273) }</li>`;
                    // $('ul').append(li);
                    li =`<li><span><i class="fal fa-clouds-sun"></i></span> ${data.weather[0].description.toUpperCase()}</li>`;
                    let f=data.weather[0].description.toUpperCase();
                    console.log(f);
                    // document.body.style.backgroundImage = "url(map1.get(li))";
                    $('ul').append(li);
                    
                    
            // }
            // const li = document.createElement('li');
            // result.append(li);
        })
        .catch((err) => {
            console.log(err);
        });


}




form.addEventListener('submit', (e) => {
    e.preventDefault();


    // getting the text from the form input
    const searchText = form.elements[0].value;

    getShows(searchText);

    form.elements[0].value = "";
})