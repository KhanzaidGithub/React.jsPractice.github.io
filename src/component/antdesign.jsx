import React from 'react';
import { DatePicker,Button } from 'antd';


const Antdesign = () => {
    return <DatePicker />;
};

export default Antdesign;


export const Antbtn02 =(props)=>{
    return(
        <Button type='primary'>{props.name}</Button>
    )
}


