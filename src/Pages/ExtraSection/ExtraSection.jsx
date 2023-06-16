import { Link } from 'react-router-dom';
import img1 from '../../assets/picture/toy_station.jpg'

const ExtraSection = () => {
    return (
        <div className='mt-16'>
            <div className="hero p-10 bg-blue-50">
                <div className="hero-content text-center">
                    <div className="flex gap-10 ">
                      <div className='w-full'>
                        <img className='w-full' src={img1}/>
                      </div>
                      <div>
                        <p className='text-4xl font-bold text-green-800'>Helping families create meaningful memories</p>
                        <p>The Toy Store has always been interested in curating the finest toys for our customers. Still true to this day, our main focus is always to pick the best of the best. That is why we still hand pick all 17,000+ items in our inventory.</p>
                        <div className='flex justify-center gap-5 mt-16'>
                            <button className='btn btn-warning'>location</button>
                          <Link to='/login'>  <button className='btn btn-success'>contact</button></Link>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;