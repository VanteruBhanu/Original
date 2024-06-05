document.addEventListener('DOMContentLoaded', () => {
    fetchCategories();
});

const fetchCategories = async () => {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        displayCategories(data.categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('mainCategories');
    categoriesContainer.innerHTML = '';
    const heading = document.getElementById('heading');
    heading.innerHTML = 'CATEGORIES';
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.innerHTML = `
            <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
            <button>${category.strCategory.toUpperCase()}</button>
        `;
        categoryDiv.onclick = () => fetchMealsByCategory(category.strCategory);
        categoriesContainer.appendChild(categoryDiv);
    });
};

const fetchMealsByCategory = async (category) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error('Error fetching meals by category:', error);
    }
};

const displayMeals = (meals) => {
    const categoriesContainer = document.getElementById('mainCategories');
    categoriesContainer.innerHTML = '';
    const heading = document.getElementById('heading');
    heading.innerHTML = 'MEALS';
    heading.style.marginLeft = '4px';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'category';
        mealDiv.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
        `;
        categoriesContainer.appendChild(mealDiv);
    });
};

const searchMeal = async () => {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (!searchInput) {
        alert('Input field cannot be empty');
        return;
    }

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
        const data = await response.json();
        if (data.meals) {
            displayMeals(data.meals);
        } else {
            console.log('No results found');
        }
    } catch (error) {
        console.error('Error searching for meal:', error);
    }
};

const openNav = () => {
    document.getElementById("sidebar").style.width = "250px";
};

const closeNav = () => {
    document.getElementById("sidebar").style.width = "0";
};

document.querySelector('.hamburger').addEventListener('click', openNav);

document.querySelectorAll('#sidebars a').forEach(data => {
    data.addEventListener('click', () => fetchMealsByCategory(data.textContent));
});
