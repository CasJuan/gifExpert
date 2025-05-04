import GifItem from './GifItem';
import { useFetchGif } from '../hooks/useFetchGif';

const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGif(category)
  console.log(isLoading)

  return (
    <>
    
        <h3>{category}</h3>
        <div className='card-grid'>
          {
            images.map( (image) => (
              <GifItem 
              key={image.id}
              {...image}
              /> 
            ))
          }
        </div>
    
    </>
  )
}

export default GifGrid