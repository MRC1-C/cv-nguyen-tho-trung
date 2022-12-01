import Product from "./product.json";

const ProductComponent = ({ name1, name2, url_img, link_figma }) => {
  return (
    <div className="p-4 w-full shadow-xl shadow-primary rounded-lg transition ease-in-out delay-100 hover:scale-105 bg-white">
      <a href={link_figma} target="blank">
        <div className="p-4">
          <img
            src={url_img}
            alt="product"
            className="w-full h-[246px] rounded-lg object-cover"
          />
          <div className="flex justify-between pt-3">
            <div>
              <p className="text-[18px] text-[#111029] pt-3">{name1}</p>
              <p className="text-[18px] text-[#111029] font-light">{name2}</p>
            </div>
            <img src="/logo1.svg" width={26} />
          </div>
        </div>
      </a>
    </div>
  );
};

function App() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-[376px] mx-auto py-4 md:py-20">
        <div className="flex justify-between">
          <img
            src="/avatar.png"
            width={84}
            height={84}
            style={{ borderRadius: 50 }}
          />
          <div>
            <p className="text-[32px] text-[#111029]">Nguyễn Thọ Trung</p>
            <p className="text-[18px] text-[#777E90]">UI/ UX Design</p>
          </div>
        </div>
        <div className="flex py-9 justify-evenly">
          {[1, 2, 3, 4, 5, 6, 7].map((logo) => (
            <img src={`/logo${logo}.svg`} key={logo} width={26} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mb-12">
        <div className="col-span-1"></div>
        <div className="col-span-4 p-4 grid grid-cols-1 md:grid-cols-2 gap-7">
          {Product.map((pr) => (
            <ProductComponent {...pr} />
          ))}
        </div>
        <div className="col-span-1"></div>
      </div>
      <div className="max-w-[376px] mx-auto text-center pt-4 pb-4 md:pt-20 text-[16px]">
        nguyen tho trung
      </div>
    </div>
  );
}

export default App;
