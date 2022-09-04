const loadCategory = () =>{ 
    fetch('https://openapi.programming-hero.com/api/news/categories')
  .then(response => response.json())
  .then(data => displayCategories(data.data.news_category))
}

const displayCategories = categories => {
    categories.forEach(category => {
        const categoriesContainer = document.getElementById('categories-container');
        const categoryLi = document.createElement('li');
        categoryLi.innerHTML = `
    <a onclick="loadNews('${category.category_id}')" href="#" class="text-dark">${category.category_name}</a>
    
    `;
        categoriesContainer.classList.add('flex');
        categoriesContainer.classList.add('list-none');
        categoryLi.classList.add('p-4', 'font-semibold');
        categoriesContainer.appendChild(categoryLi);

    })
}

const loadNews = (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data))
}

const displayNews = allNews => {

    const allNewsContainer = document.getElementById('all-news');
    allNewsContainer.innerHTML = '';

    const foundData = document.getElementById('found-data')

    const notFoundData = document.getElementById('not-found-data')

    allNews.forEach(news => {

        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
      <div class="card lg:card-side bg-base-100 shadow-xl flex justify-around pl-20 py-10">
      <div><img src="${news.thumbnail_url}" alt="Album"></div>
      <div class="card-body px-10">
        <h2 class="card-title font-semibold text-2xl my-2">${news.title}</h2>
        <p class"my-2">${news.details.length > 300 ? news.details.slice(0, 300) + '...' : news.details}</p>
        <div class="flex justify-between py-5 ">
        <div class="flex">
          <figure><img src="${news.author.img} " alt="" class="rounded-full" height="50x" width="50px"></figure>
        
        <div class="m-1">
          <h6>${news.author.name ? news.author.name : 'No Data Found'}</h6>
          <p>${news.author.published_date ? news.author.published_date : 'No Data Found'} </p>
          <p></p>
        </div>
        </div>
        <div class="view flex items-center ml-2">
          <i class="fa-regular fa-eye mb-2"></i>
         <p class="ml-3 mt-1">${news.total_view ? news.total_view + 'm' : 'No Data Found'}</p>
         </div>
         <div class="review ml-2 flex items-center">
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
         </div>
          <div class="card-actions justify-end">
            <button onclick="loadModalData('${news._id}')" class="bg-blue-500 rounded px-5 py-2">Listen</button>
          </div>
        </div>
       </div>
      </div>
    
    `;
        allNewsContainer.appendChild(newsDiv);
    })



}

loadNews();
loadCategory();
