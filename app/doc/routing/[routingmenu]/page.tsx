import React from "react";

//dinamik yonlendirmeler de [] ile dosya ismi olusturulur. Oncelik statik yonlendirmelerededir.
//Eger stati kyonlendirme yoksa dinamik yonlendirme ekrana gelir
//Routing menu item : {params.routingmenu} burda da yonlendirme yapilan sayfa ismini gosterir

const page = ({ params }) => {
  return <div>Routing menu item : {params.routingmenu}</div>;
};

export default page;
