import s from './ProfileInfo.module.css';
import Spiner from "../../Common/Spiner/Spiner";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHoocks from "./ProfileStatusWithHoocks";
import Description from "./Description";
import {useState} from "react";
import ProfileForm from "./DescriptionForm";

const ProfileInfo = (props) => {

    let [editMode,setEditMode] = useState(false);

    if(!props.profile){
        return <Spiner />
    }

    const onSubmit = (formData) => {
        props.saveProfileThunk(formData).then(() => setEditMode(false))

    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhotoThunk(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <img src={'https://pro2-bar-s3-cdn-cf.myportfolio.com/1106987f9c1a3d30352889dad7e52919/83e9d427-a1f9-44be-ab14-5c9c90fb3e1d_rwc_0x130x1920x1082x1920.jpeg?h=a3887ed5e9f83372c1a460c9cc1b9618'} className={s.contentImg}/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    {
                        props.profile.map(val => {
                            return (
                                <div key={val}>
                                    <img className={'w-25'} src={val.photo.large || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfgg1JvFtD7oG3i1S8Po1mLLWa8gYgvJGTPFoLqIXQdSzkdq-LabOmK343lT8mvKs0cY&usqp=CAU'}/>
                                    {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} className={'form-control w-25'}/>}
                                    <h4>{val.fullName}</h4>
                                </div>
                            )
                        })
                    }
                    <ProfileStatusWithHoocks status={props.status} updateStatusThunk={props.updateStatusThunk}/>
                </div>
                {
                    editMode
                    ? <ProfileForm onSubmit={onSubmit} profile={props.profile} />
                    : <Description profile={props.profile} setEditMode={setEditMode} isOwner={props.isOwner}/>
                }

            </div>
        </div>
    )
}

export default ProfileInfo;
