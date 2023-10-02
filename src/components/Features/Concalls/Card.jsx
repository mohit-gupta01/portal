import React from 'react';
import nilanjanRoy from './../../../assets/Concall-Images/NilanjanRoy.png';
import salilParekh from './../../../assets/Concall-Images/SalilParekh.png';
import './Card.css';

const Card = ({ index }) => {
    if (index === 0) {
        return (
            <div className="card">
                <div className='card-header flex-row'>
                    <img src={nilanjanRoy} alt="" />
                    <div className='flex-col'>
                        <span style={{ fontSize: '15px', color: '#DDDDDD' }}>Nilanjan Roy</span>
                        <span style={{ fontSize: '14.25px', color: '#AAAAAA' }}>CFO</span>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Headcount</span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '3px' }}>
                        <div className='card-vertical-line' style={{ height: '45px' }}></div>
                        <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>End-of-quarter headcount: 336,000 employees, down 2% from the previous quarter</span>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Employee Utilization <span style={{ fontFamily: 'InterTight-LightItalic', color: '#AAAAAA' }}>(Excluding Trainees)</span></span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '3px' }}>
                        <div className='card-vertical-line' style={{ height: '28.5px' }}></div>
                        <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Improved to 81.1%, with room for further growth</span>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Hiring</span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '3px' }}>
                        <div className='card-vertical-line' style={{ height: '45px' }}></div>
                        <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>FY '24 hiring to be based on available employee pool, growth expectations, and attrition trends</span>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Attrition</span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '3px' }}>
                        <div className='card-vertical-line' style={{ height: '54px' }}></div>
                        <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>A substantial portion of attrition backfilled by training and reskilling existing pool of talent and deployment of freshers</span>
                    </div>
                </div>
            </div>
        );
    }
    else if (index === 1) {
        return (
            <div className="card">
                <input type="checkbox" name="accordion-1" id="cb1" />
                <label htmlFor="cb1" className='tab_label'>
                    <div className='card-header flex-row'>
                        <img src={salilParekh} alt="" />
                        <div className='flex-col'>
                            <span style={{ fontSize: '15px', color: '#DDDDDD' }}>Salil Parekh</span>
                            <span style={{ fontSize: '14.25px', color: '#AAAAAA' }}>MD & CEO</span>
                        </div>
                    </div>
                </label>
                <div className='content-box1'>
                    <div className='card-content flex-col'>
                        <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Outlook:</span>
                        <div className='flex-row' style={{ alignItems: 'center', paddingTop: '3px' }}>
                            <div className='card-vertical-line' style={{ height: '54.5px' }}></div>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Confident based on large and mega deal successes, cost efficiency, automation and consolidation strengths</span>
                        </div>
                    </div>
                    <div className='card-content flex-col'>
                        <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Short-Term Challenges:</span>
                        <div className='flex-row' style={{ alignItems: 'center', paddingTop: '3px' }}>
                            <div className='card-vertical-line' style={{ height: '37.5px' }}></div>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Clients pausing or slowing transformation programs and discretionary work</span>
                        </div>
                    </div>
                    <div className='card-content flex-col'>
                        <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Impacted Sectors:</span>
                        <div className='flex-row' style={{ alignItems: 'center', paddingTop: '3px' }}>
                            <div className='card-vertical-line' style={{ height: '19px' }}></div>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Financial services, telecom, hi-tech, and parts of retail</span>
                        </div>
                    </div>
                    <div className='card-content flex-col'>
                        <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Revised Revenue Growth Guidance <span style={{ fontFamily: 'InterTight-LightItalic', color: '#AAAAAA', fontSize: '13.5px' }}>(In Constant Currency):</span></span>
                        <div className='flex-row' style={{ alignItems: 'center', paddingTop: '3px' }}>
                            <div className='card-vertical-line' style={{ height: '62px' }}></div>
                            <div className='flex-col' style={{ gap: '5px' }}>
                                <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Expecting revenue from recent deals later in the fiscal year</span>
                                <div className='flex-row' style={{ gap: '15px', fontFamily: 'Inter-Regular', color: '#CCCCCC' }}>
                                    <span>New : 1.0% to 3.5%</span>
                                    <span>Old  : 4.0% to 7.0%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="checkbox" name="accordion-2" id="cb2" />
                <label htmlFor="cb2" className='tab_label'>
                    <div className='card-header flex-row'>
                        <img src={nilanjanRoy} alt="" />
                        <div className='flex-col'>
                            <span style={{ fontSize: '15px', color: '#DDDDDD' }}>Nilanjan Roy</span>
                            <span style={{ fontSize: '14.25px', color: '#AAAAAA' }}>CFO</span>
                        </div>
                    </div>
                </label>
                <div className='content-box2'>
                    <div className='card-content flex-col'>
                        <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Reasons</span>
                        <div className='flex-row' style={{ alignItems: 'center', paddingTop: '3px' }}>
                            <div className='card-vertical-line' style={{ height: '58.5px' }}></div>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Lower volumes due to a coupling of reduced discretionary spending and delayed mega deals <span style={{ fontFamily: 'InterTight-LightItalic', color: '#AAAAAA' }}>(resulting from regulatory approvals and transition)</span></span>
                        </div>
                    </div>
                    <div className='card-content flex-col'>
                        <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Margin Guidance</span>
                        <div className='flex-row' style={{ alignItems: 'center', paddingTop: '3px' }}>
                            <div className='card-vertical-line' style={{ height: '21px' }}></div>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Unchanged at 20% to 22% for FY '24</span>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="card">
                <div className='card-header flex-row'>
                    <img src={salilParekh} alt="" />
                    <div className='flex-col'>
                        <span style={{ fontSize: '15px', color: '#DDDDDD' }}>Salil Parekh</span>
                        <span style={{ fontSize: '14.25px', color: '#AAAAAA' }}>MD & CEO</span>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Client Acceptance</span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '3px' }}>
                        <div className='card-vertical-line' style={{ height: '42px' }}></div>
                        <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Topaz (Our AI and generative AI platform) resonating well with clients</span>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Project Portfolio</span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '3px' }}>
                        <div className='card-vertical-line' style={{ height: '84px' }}></div>
                        <div className='flex-col' style={{ gap: '12px' }}>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Working on 80 generative AI projects for our clients at this time</span>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Projects cover large language models for software, text, document, voice, and video</span>
                        </div>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Employee Training</span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '3px' }}>
                        <div className='card-vertical-line' style={{ height: '22.5px' }}></div>
                        <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}> Trained 40,000 employees on generative AI</span>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Opportunities</span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '3px' }}>
                        <div className='card-vertical-line' style={{ height: '70px' }}></div>
                        <div className='flex-col' style={{ gap: '12px' }}>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Potential for new work and productivity improvements</span>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>See Generative AI and Topaz as really transformative for clients</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;