import React, { useState } from 'react';
import { addDoc, getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import FreresLogo from '../../Assets/Logo/FreresLogo.jpg';
import './Newsletter.scss';

const Newsletter = () => {
  const [loader, setLoader] = useState<boolean>(false)
  const [userEmail, setUserEmail] = useState<any>({email: ''})
  const [isUserSuscribed, setIsUserSuscribed] = useState<boolean>(false)

  const handleSetUserEmail = (e:any) => setUserEmail({...userEmail,[e.target.name] : e.target.value})

  const handleSubmit = async(e:any) => {
    setLoader(true)
    e.preventDefault()

    let emailObject:any = {}
    emailObject.email = userEmail.email

    const dataBase = getFirestore()

    const emailCollection = collection(dataBase, 'newsletter') 
    const queryCollection = query(emailCollection, where('email', '==', emailObject.email))
    
    try{
      const data = await getDocs(queryCollection)
      if(data.docs.length){
        alert("Ya existe")
      } else {
        await addDoc(emailCollection, emailObject)
        setIsUserSuscribed(true)
      }
      setLoader(false)
    } catch(error) {
      console.log(error)
    }
  }

  if(loader){
    return(
      <div className='newsletterLoader'>
        <img className='newsletterLoader_img' src={FreresLogo} alt="loader"/>
      </div>
    )
  }

  return (
    <div className='newsletter'>
      <h3 className='newsletter_h3'>ÚNETE A NUESTRA TRIBU</h3>
      <p className='newsletter_p'>RECIBE NOVEDADES Y BENEFICIOS EXCLUSIVOS</p>
      {isUserSuscribed
      ? <div className='newsletter_suscribed'>
          <p className='newsletter_suscribed_p'>HAS SIDO SUSCRITO A NUESTRO NEWSLETTER</p>
        </div>
      : <div className='newsletter_div'>
          <form className='newsletter_div_form' onSubmit={(e) => handleSubmit(e)}>
            <input 
              name='email' 
              type='email' 
              placeholder='Email' 
              value={userEmail.email} 
              className='newsletter_div_form_input' 
              onChange={(e) => handleSetUserEmail(e)} />    
              {userEmail.email
              ? <button type='submit' className='newsletter_div_form_button'>UNIRME</button>
              : <button type='submit' className='newsletter_div_form_button' disabled>UNIRME</button>}
          </form>            
        </div>}
    </div>
  );
}

export default Newsletter;