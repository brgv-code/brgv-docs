import { useState, useEffect } from "react"
import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from '../bundler';
import Resizable from "./resizable";
import { Cell } from "../state";
import { useActions } from "../hooks/use-actions";

interface CodeCellProps {
     cell: Cell;
}


function CodeCell({cell}: CodeCellProps) {
  // const ref = useRef<any>(); // ref gives us reference to any js element not only components
const [code, setCode] = useState('');
const [err, setErr] = useState('');

const { updateCell } = useActions();

// const startService = async () => {
//   ref.current = 
// }

// useEffect(() => {
//   startService();
// }, []); // empty array means run only once
// FEATURE: debouncing for bundling code after 0.75s of user input 
useEffect(() => {
    const timer = setTimeout(async () => {
        const output = await bundle(cell.content)
        setCode(output.code);
        setCode(output.err);
    }, 500);
    return () => {
        clearTimeout(timer);
    }
}, [cell.content]);

// const onClick = async () => {
//   const output = await bundle(text)
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
//     if(!output) {
//         return;
//     }


//   setCode(output);
// }

  return (
    <Resizable direction="vertical">
    <div className="h-full flex flex-row">
        <Resizable direction="horizontal">
      <CodeEditor initialValue={cell.content} onChange={(value) => updateCell(cell.id, value)}/>
      </Resizable>
      {/* <textarea
      value={text}
      onChange={ obj => {setText(obj.target.value)}} ></textarea> */}
      {/* <div>
        <button className="btn btn-primary m-4" onClick={onClick}>Submit</button>
      </div> */}
      {/* <pre>{code}</pre> */}
<Preview  code={code} err={err}/>    </div>
     </Resizable>

  );
}

export default CodeCell;
