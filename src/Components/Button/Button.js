import './Button.css'

const Button = ({ label, background, action }) => {
    return  <button
                className='Button'
                style={{ 
                        backgroundColor: background
                        }}
                onClick={action}
            >
               {label}
            </button>
}

export default Button