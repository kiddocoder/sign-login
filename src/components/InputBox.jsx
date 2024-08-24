
const InputBox = ({name ,placeholder,type}) =>{
     return(
       <div className="input_box">
            <label htmlFor={name}>{name}</label>
            <input
             type={type}
             placeholder={placeholder}
             />
       </div>
     )
}

export default InputBox;