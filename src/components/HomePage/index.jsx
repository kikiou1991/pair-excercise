import { useEffect } from 'react';

function HomePage() {
  function foodPic() {
    fetch('https://foodish-api.com/api/')
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }
  useEffect(() => {
    foodPic();
  }, []);
  return <div>Home page</div>;
}

export default HomePage;
