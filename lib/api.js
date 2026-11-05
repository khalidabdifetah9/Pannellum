export const getData = async()=>{
     const res = await fetch("http://localhost:3000/api/post");
      if(!res.ok){
        throw new Error("Something went wrong");
      }
     const data = await res.json();

     return data;

}