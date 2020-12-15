import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div>
            <div className="ui text container">
                <div className="ui form">
                    <div className="three fields">
                        <div className="field">
                            <label>First name</label>
                            <input type="text" placeholder="First Name"/>
                        </div>
                        <div className="field">
                            <label>Last name</label>
                            <input type="text" placeholder="Last Name"/>
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" placeholder="Email"/>
                        </div>
                    </div>
                    <div class="field">
                        <label>Text</label>
                        <textarea></textarea>
                    </div>
                    <button class="ui button">Submit</button>
                </div>
            </div>
        </div>
    )

};

export default ContactForm;
