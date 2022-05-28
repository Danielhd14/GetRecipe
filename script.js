const url = 'https://api.spoonacular.com/food/search?apiKey=05eb5ba0d70e41a08c3e41c316896eb5'
const options = {
    method : 'GET',
    headers : {
        'Content-Type' : 'application/json'
    }
}
let food = document.getElementById('food')
let recipeList = document.getElementById('recipeList')
async function search(){
    const response = await fetch(url + '&query=' + food.value , options)
    const data = await response.json()
    console.log(data.searchResults[0].results)

    if(recipeList.children){
        recipeList.innerHTML = ''
    }
    for(let i = 0; i < data.searchResults[0].results.length;i++){
        recipeList.innerHTML += `
        <li><a target='_blank' href = '${data.searchResults[0].results[i].link}'> ${data.searchResults[0].results[i].name}</a></li>
        <a target='_blank' href ='${data.searchResults[0].results[i].link}'><img src = '${data.searchResults[0].results[i].image}' width='250px'></a>
   `    
    }

}
