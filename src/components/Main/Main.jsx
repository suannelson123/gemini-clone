import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, setRecentPrompt } = useContext(Context);

    
    const handleCardClick = (message) => {
        setRecentPrompt(message);
        onSent(message); 
    };

    return (
        <div className='main'>
            <div className="nav">
                <p>GEMINI 1.0 Pro</p>
                <img className='gpt__icon' src={assets.gemini_icon} alt="guest_icon" />
            </div>
            <div className="main-container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p> <span>Hello, Dev.</span></p>
                            <p>How can i help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={() => handleCardClick("Suggest beautiful places to see on an upcoming road trip")}>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="compass__icon" />
                            </div>
                            <div className="card" onClick={() => handleCardClick("Briefly summarize this concept: urban planning")}>
                                <p>Briefly summarize this concept: urbarn planning</p>
                                <img src={assets.bulb_icon} alt="bulb__icon" />
                            </div>
                            <div className="card" onClick={() => handleCardClick("Brainstorm team bonding activities for our work retreat")}>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="message__icon" />
                            </div>
                            <div className="card" onClick={() => handleCardClick("Improve the readability of the following code")}>
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="code__icon" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.guest__icon} alt="user__icon" />
                            <span><b>You</b>:</span>
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="gpt__icon" />
                            <b className='gemini__name'>Gemini:</b>
                            {loading ? (
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Message here' />
                        <div>
                            <img src={assets.gallery_icon} alt="gal__icon" />
                            <img src={assets.mic_icon} alt="mic" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="send__icon" /> : null}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        ChatGPT is an AI developed by OpenAI, designed to engage in natural language conversation with users.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;
