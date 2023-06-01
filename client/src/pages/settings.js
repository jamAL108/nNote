import React ,{useEffect} from 'react'

const Settings = () => {
    useEffect(()=>{
        document.body.style.transition="all 0s";
      document.body.style.backgroundColor="#ffffff";
    },[]);
  return (
    <div>settings</div>
  )
}

export default Settings