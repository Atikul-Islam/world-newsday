const loadCategory = () =>{ fetch('https://openapi.programming-hero.com/api/news/categories')
  .then(response => response.json())
  .then(data => displayCategories(data.data.news_category))
}

const displayCategories = categories =>{
        const categoriesContainer = document.getElementById('categories-container');
        for(const category of categories){
            const categoryDiv = document.createElement('div');
            categoryDiv.innerHTML = `
            <a>${category.category_name}</a>
            `;
            categoriesContainer.appendChild(categoryDiv);
        }
}

loadCategory();