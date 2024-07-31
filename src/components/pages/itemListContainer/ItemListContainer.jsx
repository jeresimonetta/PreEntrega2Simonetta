import { useState, useEffect } from "react";
import obtenerProductos from "../../../data/data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams;

  useEffect(() => {
    obtenerProductos()
      .then((dataProductos) => {
        if (idCategoria) {
          const productosFiltrados = dataProductos.filter(
            (producto) => producto.categoria === idCategoria
          );
          setProductos(productosFiltrados);
        } else {
          setProductos(dataProductos);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Finalizó la promesa");
      });
  }, [idCategoria]);

  return (
    <div>
      <h1>Bienvenidxs a Sick Ink Prints.</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
