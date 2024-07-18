import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return context.filteredItems?.map((item) => (
          <Card key={item.id} data={item} />
        ));
      } else {
        return (
          <div className="flex items-center justify-center w-full">
            <FaceFrownIcon className="h-8 w-8 text-gray-500 mr-2" />
            <div className="text-gray-500 text-lg">
              We don&apos;t have anything
            </div>
          </div>
        );
      }
    } else {
      return context.items?.map((item) => <Card key={item.id} data={item} />);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl"> All Products</h1>
      </div>
      <input
        className="mt-8 w-80 border-2 border-slate-200 p-2 rounded-2xl sle focus:outline-none select-none"
        type="text"
        placeholder="search a product"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      {/* The cards renderize depends of items */}
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg p-6">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
