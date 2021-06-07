import React, {useState} from 'react'
import styled from 'styled-components'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {ProfileImage} from './ProfileImage/ProfileImage'
import {SelectedInfo} from './SelectedInfo/SelectedInfo'

 import {
   Formik,
   FormikHelpers,
   FormikProps,
   Form,
   Field,
   FieldProps,
 } from 'formik';
import { PanelServicesInformstions } from './PanelServicesInformations/PanelServicesInformations'
 
 interface MyFormValues {
   firstName: string;
 }
const SettingsProfileWrapper = styled.div`

width: 100%;
height: 5vh;
background-color: grey;
display: flex;
justify-content: flex-end;
align-items: center;
>div{
width: 25%;
padding-left: 5px;
height: 5vh;
display: flex;
justify-content: flex-start;
align-items: center;
background-color: red;
}
>div:nth-last-of-type(3){
width: 15%;

}
>div a{
    text-decoration: none;
    color: darkblue;
}
`
const ProfileMenuWrapper = styled.div`
min-height: 20vh;
width: 100%;

display: flex;
`
const ProfileImageWrapper = styled.div`
width: 20%;
height: 20vh;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
>a{
  text-decoration: none;
  margin-top: 5px;
}
`
const ProfileInfoWrapper = styled.div`
width: 80%;
height: 20vh;

display: flex;


`
const PanelServicesInformationsWrapper = styled.div`
width: 100%;
min-height: 10vh;

display: flex;
flex-direction: column;
align-items: center;

`
const ProfileSelectedWrapper = styled.div`
width: 100%;
min-height: 30vh;

`
export const Profile:React.FC = ()=>{
  const [inputValue, setInputValue] = useState({
    name: "Humberta Swift",
    company: "Clifford Chance", 
    city: "New York",
    job: "Partner",
    email: "humbertaswift@gmail.com",
    telephone: "123456878785"
})
const [selectValue, setSelectValue] = useState({
  slct1: "Mergers and  qcquiston",
  slct2: "Cross border operation", 
  slct3: "Transaction over 500ME/S",
  slct4: "Paris bar association",
  slct5: "Tunisian bar association",
  slct6: "Tunisia"
})
    const [edit, setEdit] = useState(false)
    const [edit2, setEdit2] = useState(false)
   

    const handleEditData = (e:any, firstEditForm:any, secondEditForm: any)=>{
   console.log("FORMMMMM")
   if(firstEditForm!==null){
   console.log(firstEditForm)
   const formData = new FormData(firstEditForm)
   const formData2 = new FormData(secondEditForm)
   console.log(formData.getAll('name'))
   const name = formData.getAll('name')
   const company = formData.getAll('company')
   const city = formData.getAll('city')
   const job = formData.getAll('job')
   const email = formData2.getAll('email')
   const telephone = formData2.getAll('telephone')
 
   setInputValue({
      name: `${name[0] === "" ? inputValue.name : name[0]}`,
      company: `${company[0] === "" ? inputValue.company : company[0]}`, 
      city:  `${city[0] === "" ? inputValue.city : city[0]}`, 
      job:   `${job[0] === "" ? inputValue.job : job[0]}`, 
      email:  `${email[0] === "" ? inputValue.email : email[0]}`, 
      telephone:   `${telephone[0] === "" ? inputValue.telephone : telephone[0]}`, 
   })
 
   

   }

console.log(inputValue)

      setEdit(!edit)
console.log(edit)
    } 

    const handleEditData2 = (selectedForm:any)=>{
      setEdit2(!edit2)
      console.log(edit2)
      if(selectedForm!==null){
        console.log(selectedForm)
        const formData = new FormData(selectedForm)
      
        console.log(formData.getAll('slct1'))
        const slct1 = formData.getAll('slct1')
        const slct2 = formData.getAll('slct2')
        const slct3 = formData.getAll('slct3')
        const slct4 = formData.getAll('slct4')
        const slct5 = formData.getAll('slct5')
        const slct6 = formData.getAll('slct6')

        setSelectValue({
          slct1: `${slct1[0] === "" ? selectValue.slct1 : slct1[0]}`,
          slct2: `${slct2[0] === "" ? selectValue.slct2 : slct2[0]}`, 
          slct3:  `${slct3[0] === "" ? selectValue.slct3 : slct3[0]}`,
          slct4: `${slct4[0] === "" ? selectValue.slct4 : slct4[0]}`,
          slct5: `${slct5[0] === "" ? selectValue.slct5 : slct5[0]}`, 
          slct6:  `${slct6[0] === "" ? selectValue.slct6 : slct6[0]}`, 
       })
      }
      console.log(selectValue)
    }
    const editInfo = {handleEditData, edit, inputValue}
    const editInfo2 = {handleEditData2, edit2, selectValue}
    return(
        <>
        <SettingsProfileWrapper>
            <div><a href="#">Message</a></div>
            <div><a href="#">Create a request</a></div>
            <div><a href="#">Add to a cluster</a></div>
        </SettingsProfileWrapper>
        <ProfileMenuWrapper>
          <ProfileImageWrapper>
            <ProfileImage />
            </ProfileImageWrapper>
            <ProfileInfoWrapper>
            <ProfileInfo {...editInfo}/>
            </ProfileInfoWrapper>
        </ProfileMenuWrapper>
        <ProfileSelectedWrapper>
            <SelectedInfo {...editInfo2}/>
        </ProfileSelectedWrapper>
        <PanelServicesInformationsWrapper>
          <PanelServicesInformstions />
        </PanelServicesInformationsWrapper>
        </>
    )
}