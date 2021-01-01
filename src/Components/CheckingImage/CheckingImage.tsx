import React from "react";
import styles from "./CheckingImage.module.css";

type CheckingImagePropsType = {
    multipleResult: boolean | null
}

export const CheckingImage = (props: CheckingImagePropsType) => {
    return(
        <div>
            <img className={styles.imgStyle} src={props.multipleResult
                ? 'https://i.pinimg.com/originals/01/fb/2c/01fb2cb2cf0855514cf1df69f46acda8.gif'
                : 'https://media1.tenor.com/images/d3fb3b41f9acae3e80bb6269686e68c5/tenor.gif?itemid=11347556'}/>
            {/*<video width="400" height="300" >*/}
            {/*    <source src="https://www.youtube.com/watch?v=lSMO9QSVtUc"/>*/}
            {/*</video>*/}
        </div>
    )
}