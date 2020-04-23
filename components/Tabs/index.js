// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const axiosPromise = axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then (results => {
    console.log(results);
    tabs(results);
})


function tabs(param) {

    const newtab = document.createElement('div');


    newtab.classList.add('tab')


    newtab.textContent = `${param.data.topics}`;

    document.querySelector('.topics').appendChild(newtab);

    return newtab;

}

