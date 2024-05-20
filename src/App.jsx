function App() {
  let Name = "Pravesh";// JSX Syntax
  let cities = ['Indore', 'Bhopal', 'Pune', 'Lapta Ladies']; // Rendering list example
  let posts = [
    { Post_Title: 'This is the first Post', Post_Body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', Categories: ['Trending', 'Hot', 'Latest'] },
    { Post_Title: 'This is the second Post', Post_Body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', Categories: ['Trending', 'amazing', 'Latest'] }
  ] // Blog post Rendering list
// Conditional Rendering example 
const gender = "Male"

  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue" }}>Hello {Name}</h1>
      <ul>
        {cities.map((city) => <li>{city}</li>)} 
      </ul>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.Post_Title}</h2>
          <p>{post.Post_Body}</p>
          <h4>Categories:{post.Categories.toString("")}</h4>
        </div>
      ))}
      <p>Conditioal Rendering Example: {gender?"You are Male":"You are not a human"}</p>
    </>
  );
}

export default App;
