import { useState } from "react"
import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from '../bundler';
function CodeCell() {
  // const ref = useRef<any>(); // ref gives us reference to any js element not only components
const [text, setText] = useState('');
const [code, setCode] = useState('');
// const startService = async () => {
//   ref.current = 
// }

// useEffect(() => {
//   startService();
// }, []); // empty array means run only once


const onClick = async () => {
  const output = await bundle(text)
  // if(!ref.current) {
  //   return; // if ref.current is undefined return
  // }
// const resultCode = await ref.current.transform(text, {
//   loader: 'jsx', // jsx is a loader for react code and tsx is for typescript react code
//   target: 'es2015' // es2015 is a version of javascript that we want to compile our code to 
//   })
//   setCode(resultCode.code);


// const resultCode = 
// })
  setCode(output);
}

  return (
    <div >
      <CodeEditor initialValue="const a=1;" onChange={(value) => setText(value)}/>
      {/* <textarea
      value={text}
      onChange={ obj => {setText(obj.target.value)}} ></textarea> */}
      <div>
        <button className="btn btn-primary m-4" onClick={onClick}>Submit</button>
      </div>
      {/* <pre>{code}</pre> */}
<Preview  code={code}/>    </div>

  );
}

export default CodeCell;
