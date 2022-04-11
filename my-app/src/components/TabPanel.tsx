import React, { useState } from 'react';
import {Tab} from './Tab'
import './TabPanel.css'

const tab_list = [
    {
        title: "Tab 1",
        content: "Texto da tab 1."
    },
    {
        title: "Tab 2",
        content: "Texto da tab 2."
    },
    {
        title: "Tab 3",
        content: "Texto da tab 3."
    },
    {
        title: "Tab 4",
        content: "Texto da tab 4."
    },
]

export function TabPanel() {

    const [currentContent, setCurrentContent] = useState('Clique em uma tab.')

    function setContent(content: string){
        if(content == currentContent){
            setCurrentContent("Clique em uma tab.")
        }
        else{
            console.log(content)
            setCurrentContent(content)
        }
    }

   const tabs = tab_list.map(tab => <Tab key={tab.title} title={tab.title} content={tab.content} onSelection={setContent} selected={currentContent}/>)
   return <div className='panel'>
       {tabs}

       <div className='box'>
           <p>{currentContent}</p>
       </div>
   </div>
}