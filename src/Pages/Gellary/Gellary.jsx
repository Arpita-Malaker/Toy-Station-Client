
import p1 from '../../assets/gellary/1.jpg'
import p2 from '../../assets/gellary/2.jpg'
import p3 from '../../assets/gellary/3.jpg'
import p4 from '../../assets/gellary/4.jpg'
import p5 from '../../assets/gellary/5.jpg'
import p6 from '../../assets/gellary/6.jpg'
import p7 from '../../assets/gellary/7.jpg'
import p8 from '../../assets/gellary/8.jpg'
import p9 from '../../assets/gellary/9.jpg'
import p10 from '../../assets/gellary/10.jpg'
import p11 from '../../assets/gellary/11.jpg'
import p12 from '../../assets/gellary/12.jpg'
import './Gellary.css'

const Gellary = () => {

    let data=[

        {
            id:1,
            imgSrc:p11
        },
        {
            id:2,
            imgSrc:p2
        },
        {
            id:3,
            imgSrc:p3
        },
        {
            id:4,
            imgSrc:p4
        },
        {
            id:5,
            imgSrc:p5
        },
        {
            id:6,
            imgSrc:p6
        },
        {
            id:7,
            imgSrc:p7
        },
        {
            id:8,
            imgSrc:p8
        },
        {
            id:9,
            imgSrc:p9
        },
        {
            id:10,
            imgSrc:p10
        },
        {
            id:11,
            imgSrc:p1
        },
        {
            id:12,
            imgSrc:p12
        }
    ]
  
    return (
       <div className='mt-16'>
         <h2 className='text-3xl text-green-800 font-bold text-center'>Toy Gellary</h2>
        <div className="gellary mt-16">
           

            {
                data.map((item,index)=><div className='pics' key={index}>
                    <img src={item.imgSrc}  />
                </div>

                )
            }
      
            
        </div>
       </div>
    );
};

export default Gellary;