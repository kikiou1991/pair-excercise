import { useEffect } from 'react';

const RecipePage = () => {
  const getRecipe = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    getRecipe();
  }),
    [];
  return <div>Recipe Page</div>;
};

export default RecipePage;
