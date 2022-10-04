
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

  const { isLoading, items } = useFetchGifs(category); 

  return (
    <section key={category}>
        {
          isLoading ? <h3>Cargando ...</h3> :
          <>
            <h3>{category}</h3>
            <div className="card-grid">
              { items.map((items) => (
                <GifItem
                  key={items.id} 
                  {...items} 
                />
              ))}
            </div>
          </>
        }
        
    </section>
  )
}