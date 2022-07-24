import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
    // const [emojiValueFromCurrentRender, queueRerenderWithNewEmojiValue] =
    //   useState("");
    const [EmojiValuesFromCurrentRender, queueRerenderWithUpdatedEmojiValues] =
      useState<string[]>([]);
    
    const handleMoodChangeToHappy = () => {
        // queueRerenderWithNewEmojiValue('😀');
        queueRerenderWithUpdatedEmojiValues([...EmojiValuesFromCurrentRender, '😀'])
    }
    const handleMoodChangeToConfused = () => {
          //queueRerenderWithNewEmojiValue('🤔');
          queueRerenderWithUpdatedEmojiValues([...EmojiValuesFromCurrentRender, '🤔'])
      }
    const handleMoodChangeToSad = () => {
        //queueRerenderWithNewEmojiValue('😢');
          queueRerenderWithUpdatedEmojiValues([...EmojiValuesFromCurrentRender, '😢'])
      }  

    // const handleMoodChangeToConfused = () => {
    //     queueRerenderWithNewEmojiValue('🤔');
    //     queueRerenderWithNewPreviousEmojiValues([...previousEmojiValuesFromCurrentRender, emojiValueFromCurrentRender])
    // }

    // const handleMoodChangeToSad = () => {
    //     queueRerenderWithNewEmojiValue('😢');
    //     queueRerenderWithNewPreviousEmojiValues([...previousEmojiValuesFromCurrentRender, emojiValueFromCurrentRender])
    // }  
    return (
      <>
        <h1>Emoji picker</h1>
        {/* <p>List of your previous emoji: {previousEmojiValuesFromCurrentRender}</p>
        <p>Picked Emoji: {EmojiValuesFromCurrentRender}</p> */}
        <p>List of your picked emoji: {EmojiValuesFromCurrentRender.slice(-5).map((element, index)=> <li key = {index}>{element}</li>)}</p>
        <button onClick={handleMoodChangeToHappy}>😀</button>
        <button onClick={handleMoodChangeToConfused}>🤔</button>
        <button onClick={handleMoodChangeToSad}>😢</button>
        <button onClick={()=> {queueRerenderWithUpdatedEmojiValues([...EmojiValuesFromCurrentRender, '👌'])}}>👌</button>
        <button onClick={function () {queueRerenderWithUpdatedEmojiValues([...EmojiValuesFromCurrentRender, '🐶'])}}>🐶</button>
        <button onClick={()=> {queueRerenderWithUpdatedEmojiValues([...EmojiValuesFromCurrentRender, '😂'])}}>😂</button> 
 

      </>
    );
  }
  
        // const handleAddOneToCounter = () => {
    //   queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 1);
    // };
  
    // const handleSubtractOneFromCounter = () => {
    //   queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 1);
    // };
  
    // const handleStoreCurrentCount = () => {
    //   queueRerenderWithNewFavouriteValue(counterValueFromCurrentRender);
    // };
    {/* 
        

        <button onClick={handle}>-1</button>
        <button onClick={handleAddOneToCounter}>+1</button>
        <hr />
        <button onClick={handleStoreCurrentCount}>Store current count</button> */}