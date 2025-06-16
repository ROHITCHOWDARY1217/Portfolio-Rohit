import { useState } from 'react';
import './Skills.css';

export default function Skills() {
    const [showFrontEndDetails, setShowFrontEndDetails] = useState(false);
    const[showProgrammingDetails, setShowProgrammingDetails] = useState(false);
    const [showOtherDetails, setShowOtherDetails] = useState(false);

    const ontoggleFrontEndDetails = () => {
        setShowFrontEndDetails(!showFrontEndDetails);
    };

    const ontoggleOtherDetails = () => {
        setShowOtherDetails(!showOtherDetails);
    }

    const ontoggleprogrammingDetails = () => {
        setShowProgrammingDetails(!showProgrammingDetails);
    }

    return (
        <div className="skills-container" id="Skills">
            <div className='skills-header'>
                <h1 className="skills-title">Skills</h1>
            </div>
            
            <div className='skills-buttons'>
                <div className='front-end'>
                    <button onClick={ontoggleFrontEndDetails} className='frontend-button'>
                        FRONT END
                    </button>
                    {showFrontEndDetails && (
                <div className="frontEnd-details">
                    <div className='img-1'>
                        <img
                            src="https://cdn-icons-png.freepik.com/512/11180/11180356.png?ga=GA1.1.1550510889.1749721696"
                            alt="HTML"
                            className='front'
                            />
                        <p>HTML</p>
                    </div>
                    <div  className='img-1'>
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700035-icon-77-document-file-css-1024.png"
                        alt="CSS"
                        className='front' />
                        <p>CSS</p>
                    </div>
                    <div  className='img-1'>
                    <img
                        src="https://img.icons8.com/?size=128&id=FRRACRKRsw2s&format=png"
                        alt="JavaScript"
                        className='front' />
                        <p>Java Script</p>
                    </div>
                    <div  className='img-1' >
                    <img
                        src="https://img.icons8.com/?size=160&id=0Da6k7SMq0hs&format=png"
                        alt="React"
                        className='front' />
                        <p>React</p>
                    </div>
                    </div>
            )}

                </div>
                <div className="programming">
                    <button onClick={ontoggleprogrammingDetails} className='programming-button'>
                        PROGRAMMING 
                    </button>
                    {showProgrammingDetails && (
                <div className="programming-details">
                    <div className='img-1'>
                    <img
                        src="https://img.icons8.com/?size=128&id=eMdBqh1N9IWw&format=png"
                        alt="C"
                        className='back' />
                        <p>C</p>
                    </div>
                    <div className='img-1'>
                    <img
                        src="https://img.icons8.com/?size=96&id=40669&format=png"
                        alt="C++"
                        className='back' />
                        <p>C++</p>
                    </div>
                    <div className='img-1'>
                    <img
                        src="https://img.icons8.com/?size=160&id=lTKW3iI3wIT0&format=png"
                        alt="Java"
                        className='back' />
                        <p>Java</p>
                    </div>
                    <div className='img-1'>
                    <img
                        src="https://img.icons8.com/?size=160&id=hGdCwhSHUe6L&format=png"
                        alt="Python"
                        className='back' />
                        <p>Python</p>
                    </div>
                </div>
            )}
                </div>
                <div className='Others'>
                    <button onClick={ontoggleOtherDetails} className='other-button'>
                    OTHERS
                    </button>
                    {showOtherDetails && (
                <div className="other-details">
                    <div className='img-1'>
                    <img
                        src="https://img.icons8.com/?size=160&id=rgBl3Xo4H0Ar&format=png"   
                        alt="SQL"
                        className='other' />
                        <p>SQL</p>
                    </div>
                    <div className='img-1'>
                    <img
                        src="https://img.icons8.com/?size=120&id=DXNqXpTuOYm0&format=png"
                        alt="Testing"
                        className='other' />
                        <p>Manual Testing</p>
                    </div>
                </div>
            )}
                </div>
                
            </div>
        </div>
    );
}   