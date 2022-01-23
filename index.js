function searchuniversity(query){
const url = `http://universities.hipolabs.com/search?country=${query}`
fetch(url)
.then((response)=>{
return response.json();
})
.then((jsonData)=>{
const results = jsonData.map(element => element.name)
// renderResult(results);
console.log(results);
      const list = document.getElementById('content');
         list.innerHtml = "";
            results.forEach(result => {
                const element = document.createElement("li");
                element.innerText = result;
                list.appendChild(element);
            });

})
}

let btn = document.getElementById("search");
btn.addEventListener('click',function(){
    const search = document.getElementById("searchFields");
    searchuniversity(search.value);
})