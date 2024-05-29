const Filter = ({ lists, setlists, setcontext }) => {
  
  const handleRate = (event) => {
    event.preventDefault();
    const filteredLists = lists.filter(restaurant => restaurant.info.avgRating >= 4.5);
    setlists(filteredLists); console.log(filteredLists)
  };
  
  const handleVariety = (event) => {
    event.preventDefault();
    const filteredLists = lists.filter(restaurant => restaurant.info.cuisines.includes("South Indian"));
    setlists(filteredLists);
    console.log(filteredLists)
  };
  
  const handleChange = (event) => {
    setcontext(event.target.value);
  };

  return (
    <form className="search">
      <button onClick={handleRate}>Top Rated Restaurants</button>
      <button onClick={handleVariety}>South Indian</button>
      <input className="box" onChange={handleChange} type="text" />
    </form>
  );
};

export default Filter;
