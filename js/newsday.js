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
        .then(data => console.log(data.data))
}

loadNews();
loadCategory();
