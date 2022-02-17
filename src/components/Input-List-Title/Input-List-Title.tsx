import React, {FC} from 'react';
import {IInputListTitleProps} from "../../types";
import {ListTitle, ListTitleChange } from './Input-List-Title.styled';

export const InputListTitle:FC<IInputListTitleProps> = ({listTitleData}) => {

    return (
        <>
           <ListTitleChange>
                    <ListTitle>{listTitleData}</ListTitle>
                    {/*<ListTitleInput type='text'/>*/}
           </ListTitleChange>
        </>
    )
}