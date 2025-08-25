import "./App.css";
import CallAPI from "./components/CallAPI/CallAPI";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import Products from "./components/Products/Products";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UserProfile from "./components/UserProfile/UserProfile";

const App = () => {
  // const product1 = {
  //   img: 'https://i.pinimg.com/1200x/f0/04/e2/f004e230c860f4ae457dda88bf14faae.jpg',
  //   name: 'San pham 1',
  //   price: 100000,
  //   desc: 'Day la san pham 1',
  // };

  return (
    <div className="App">
      <Header />
      <main>
        {/* <Product img={product1.img} name={product1.name} price={product1.price} desc={product1.desc} /> */}
        {/* <UserProfile /> */}

        {/* <Counter /> */}

        {/* <Products /> */}

        {/* <CallAPI /> */}

        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default App;
