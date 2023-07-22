import React from 'react'
import avtar from "../images/avatar.jpg"
import send from "../images/icons8-right-arrow-48.png"
import dog1 from "../images/dog-image-1.jpg"
import dog3 from "../images/dog-image-3.jpg"
import dog2 from "../images/dog-image-3.jpg"
import back from "../images/icons8-back-48.png"

function Chat() {
  return (
    <div>
<div className="container-left w-1/2 h-[98vh]  max-[811px]:w-[100vw] max-[810px]:h-[100vh] ">

<div className="design-left w-[40vw] h-[90vh] bg-gradient-to-b from-[#e942ff] to-[#8838ff] -z-10 absolute rounded-b-full -left-20 max-[811px]:w-[70%] max-[811px]:h-[80vh] max-[811px]:-left-15">
</div>
<div className="mobile  w-[270px] shadow-2xl bg-[#f5f3f7]  border-white border-[10px] ml-80 relative top-24 text-xs rounded-3xl max-[811px]:mx-auto max-[811px]:top-5">

  <div className="screen w-full rounded pb-2 h-full">

    <div className="chat-header relative">
      <div className="bg-white w-1/2 h-1/5 rounded-b-3xl absolute left-1/4"></div>
      <div className="flex items-center bg-gradient-to-r to-[#e942ff] from-[#8838ff] justify-between py-5 box-border w-full rounded-t-xl">
        <div className="left-part flex items-center box-border">
        <img src={back} alt="back" className="h-5 ml-2"/>
          <img src={avtar} className="h-10 rounded-3xl border-2 border-white mx-2"/>

          <div className="avatar-info flex flex-col pr-5  box-border ">
            <strong className="text-white">Samuel Green</strong>
            <small className="text-[#d89eff]">Available to Walk</small>
          </div>
        </div>

        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="6" r="2" transform="rotate(90 12 6)" fill="#fff"/>
              <circle cx="12" cy="12" r="2" transform="rotate(90 12 12)" fill="#fff"/>
              <path d="M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20Z" fill="#fff"/>
        </svg>
      </div>
    </div>



    <div className="chat-body flex flex-col text-[0.6rem]">
      <div className="mess-left p-1 w-fit m-2 rounded-xl text-[#9241c8] bg-purple-100">
      <p>That sounds great. I'd be <br/> happy with that.</p></div>
      <div className="mess-left  p-1 w-fit m-1 rounded-xl text-[#9241c8] bg-purple-100"><p>Could you send over some <br/> pictures of your dog, please?</p></div>
      <div className="dog-images flex justify-end">
          <img src={dog1} alt="dog" className="h-12 rounded-xl m-1"/>
          <img src={dog2} alt="dog" className="h-12 rounded-xl m-1"/>
          <img src={dog3} alt="dog" className="h-12 rounded-xl m-1"/>
      </div>
      <div className="mess-right self-end bg-white rounded-xl text-[#6e5d7e] w-fit p-1 m-1"><p>Here are a few pictures. She's <br/> a happy girl!</p></div>
      <div className="mess-right self-end bg-white rounded-xl text-[#6e5d7e] w-fit p-1 m-1"><p> Can you make it?</p></div>
      <div className="mess-left  p-1 w-fit m-1 rounded-xl text-[#9241c8] bg-purple-100"><p>She looks so happy! The time <br/> we discussed works. How <br/> long shall I take her out for?</p></div>
      
      <div className="option-left flex justify-between w-fit  py-2 pl-0 pr-4 m-1 items-center bg-gradient-to-r from-[#e942ff] to-[#8838ff] rounded-2xl ">
        <div className="part-left flex p-1 bg-transparent mr-6">
          <input type="radio" name="walk-option" className="mx-2"/>
          <p className="text-[0.6rem] text-[#fff]">30 minute walk</p>
        </div>
        <big><strong className="text-white">$29</strong></big>
      </div>

      <div className="option-left flex justify-between w-fit  py-1 pl-0 pr-4 m-1 items-center bg-gradient-to-r from-[#e942ff] to-[#8838ff] rounded-2xl ">
        <div className="part-left  flex p-1 bg-transparent mr-6">
          <input type="radio" name="walk-option" className="mx-2 "/>
          <p  className="text-[0.6rem] text-[#fff]">1 hour walk</p>
        </div>
        <big><strong className="text-white">$49</strong></big>
      </div>

    </div>

    <div className="chat-footer flex  bg-white items-center justify-between px-2 py-1 mx-2 mt-1 rounded-3xl ">
      <input type="text" placeholder="Type a message…" name="chat" id="chat-box" className="focus:outline-none"/>
      <button><img src={send} className=" bg-[#3e2753] h-8 rounded-full "/></button>
    </div>

  </div>
</div>
</div>
    </div>
  )
}

export default Chat