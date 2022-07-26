//Contact page

const ContactBoxTitle = () =>{
    return(
        <h3>Contact Us</h3>
    )
}

const Link = () =>{
    return(
        <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a>
    )
}

const ContactBox =({textBox1, textBox2}) =>{
    return(
        <div>
            <div>
                <p>{textBox1}<Link /></p>
                <p>{textBox2}</p>
            </div>
        </div>
    )
}


const RenderingContactBox =() =>{
    return(
        <div>            
            <ContactBoxTitle />
            <ContactBox
                textBox1 = {'Please email us at '}
                textBox2 = {'We will reply to your email as soon as we can.'}
            />
        </div>
    )
}

export {RenderingContactBox };