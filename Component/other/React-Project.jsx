"use client"
import { useRef,useState,useEffect} from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image"
const React_Project = () => {
  const [products,setProducts] = useState([]);
  // const ref1 = useRef("");
  // const ref2 = useRef("");
  // const SubmitHandler = (e)=>{
  //    e.preventDefault();
  //    const userdata = {email:ref1.current,password:ref2.current}
  //    console.log(userdata);
  //    setData(userdata);
  //     fetch("http://localhost:5000/user",
  //     {method:"POST",
  //     headers: {
  //         "Content-Type": "application/json",
  //         },
  //     body:JSON.stringify(userdata)})
  //     .then(res=>res.json()).then(data=>console.log(data.message))
  // }

  const router = useRouter();
  
  useEffect(()=>{
    fetch("http://localhost:5000").then(res=>res.json()).then(data=>setProducts(data))
  },[])
  return (
    <main>
       <section className='flex w-screen px-110 pt-50 space-x-60'>
          <div className='flex-[2.3] flex-col space-y-8 pt-15'>
            <h1 className='text-5xl tracking-widest'>React Projects</h1>
            <p className='text-xl leading-8'>Projects are the most practical way to learn any language, and<span> </span>
                <span className='font-semibold underline tracking-widest'>React</span> 
                <span> </span>is no exception. Solidify your knowledge of React by creating these cool projects.
            </p>
            <button 
              className='text-xl px-7 border-2 border-transparent py-4 rounded-sm transition-all duration-400 bg-[#60dbfb] hover:bg-white hover:text-[#60dbfb] hover:border-2 hover:border-[#60dbfb] '>
              JOIN THE COURSE
            </button>
          </div>
          <div className='flex-2 pb-50'>
            <Image width={350} height={400} src={"/Vector.jpg"} alt='Image In The Hero Section.'/>
          </div>
       </section>
       {/* <section className='w-200 mx-auto'>
        <form onSubmit={SubmitHandler} className='w-full px-20 py-10 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] rounded-lg' action="" method='post'
         
        >
          <input  onBlur={(e)=>ref1.current = e.target.value} placeholder='Enter Email' className='w-full border-2 outline-none border-gray-500 h-20 px-3 rounded-2xl mb-4' type="email" />
          <input  onBlur={(e)=>ref2.current = e.target.value} placeholder='Enter PassWord' className='w-full h-20 border-2 outline-none border-gray-500 px-3 rounded-2xl mb-4 ' type="password" />
          <button className='px-7 py-4 font-semibold font-xl bg-blue-400 rounded-xl' type='submit' >Submit</button>
        </form>
       </section> */}
       <section className="bg-[#e2e8f0] w-screen px-130 py-20">
            <h1 className=' tracking-widest text-center mb-2 text-4xl'>Course Projects</h1>
            <div className='mb-20 w-30 h-1 mx-auto bg-blue-400'></div>
          <div className="grid grid-cols-3 gap-7">
             {products.map((product)=>(<div
                  onMouseEnter={()=>router.prefetch(`/detail/${product.id}`)} 
                  onClick={()=>router.push(`/detail/${product.id}`)} key={product.id} 
                  className='flex flex-col hover:scale-103 transition-all duration-300'>
                      <div className=''>
                         <Image width={350} height={300} alt='Image' src={`/${product.image}.jpg`}></Image>
                      </div>
                      <div className='bg-white text-center py-4'>
                         {product.name}
                      </div>
             </div>))}
          </div>
       </section>
    </main>
  )
}

export default React_Project