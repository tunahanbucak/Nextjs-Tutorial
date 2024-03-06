import React from "react";
// buda sonsuz sekilde sayfa olsuturmada kullanilir
// [...page] yerine [[...page]] kullanilirsa catch in page sayfasi da aynisi olur
const page = ({ params }) => {
  return <div>page : {params.page}</div>;
};

export default page;
