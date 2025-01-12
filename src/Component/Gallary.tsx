
import { GiBowTieRibbon } from "react-icons/gi";
import ImageSlider from './ImageSlider';

const Gallary = () => {
  return (
    <div>
        <div>
            <h3 className='flex items-center gap-3 text-white text-4xl md:text-6xl'>Our Memories <GiBowTieRibbon className='text-red-500 mt-3'/></h3>

            <div>
                <ImageSlider/>
            </div>
        </div>
    </div>
  )
}

export default Gallary