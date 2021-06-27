import React, {useState} from 'react'
import styled from 'styled-components'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {ProfileImage} from './ProfileImage/ProfileImage'
import {SelectedInfo} from './SelectedInfo/SelectedInfo'
import {Proposal} from './Proposal/Proposal'
import {InternalReviews} from './InternalReviews/InternalReviews'
import {Amount} from './Amount/Amount'
import {ISingleUser} from '../../entities/users'

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

display: flex;
justify-content: flex-end;
align-items: center;
padding-bottom: 10px;
>div{
width: 25%;
padding-left: 5px;
height: 5vh;
display: flex;
justify-content: center;
align-items: center;

}
>div:nth-last-of-type(3){
width: 15%;

}
>div a{
    text-decoration: none;
    color: darkblue;
    font-weight: bold;
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

const ProposalWrapper = styled.div`
min-height: 10vh;
width: 100%;


  >h3{
    margin:0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    padding-top: 10px;
    box-sizing: border-box;
    color: darkblue;
margin-bottom: 14px;
margin-top: 10px;
}
`

const InternalReviewsWrapper = styled.div`
min-height: 10vh;
width: 100%;


  >h3{
    margin:0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    padding-top: 10px;
    box-sizing: border-box;
    color: darkblue;
margin-bottom: 14px;
margin-top: 10px;
}
`
const AmountWrapper = styled.div`
min-height: 10vh;
width: 100%;


  >h3{
    margin:0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    padding-top: 10px;
    box-sizing: border-box;
    color: darkblue;
margin-bottom: 14px;
margin-top: 10px;
}
`

interface IUserData{
  loggedUserData: ISingleUser[];
  userPhoto: string;
}

export const Profile:React.FC<IUserData> = (props)=>{
  const [inputValue, setInputValue] = useState({
    name: props.loggedUserData[0].name,
    company: props.loggedUserData[0].company.name, 
    city: props.loggedUserData[0].address.city,
    job: props.loggedUserData[0].company.catchPhrase,
    email: props.loggedUserData[0].email,
    telephone: "+32 34384782763"
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
   
   if(firstEditForm!==null){
   
   const formData = new FormData(firstEditForm)
   const formData2 = new FormData(secondEditForm)
   
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



      setEdit(!edit)

    } 

    const handleEditData2 = (selectedForm:any)=>{
      setEdit2(!edit2)
      
      if(selectedForm!==null){
        
        const formData = new FormData(selectedForm)
      
        
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
      
    }
    const userImage = props.userPhoto
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
            <ProfileImage image = {userImage}/>
            </ProfileImageWrapper>
            <ProfileInfoWrapper>
            <ProfileInfo {...editInfo}/>
            </ProfileInfoWrapper>
        </ProfileMenuWrapper>
        <ProfileSelectedWrapper>
            <SelectedInfo {...editInfo2}/>
        </ProfileSelectedWrapper>
        <PanelServicesInformationsWrapper>
          <PanelServicesInformstions image={userImage}/>
        </PanelServicesInformationsWrapper>
        <ProposalWrapper>
            <Proposal />
        </ProposalWrapper>
        <InternalReviewsWrapper>
          <InternalReviews />
          </InternalReviewsWrapper>
          <AmountWrapper>
            <Amount />
          </AmountWrapper>
        </>
    )
}