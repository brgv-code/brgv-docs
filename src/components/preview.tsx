import { useEffect, useRef } from "react";

interface PreviewProps {
    code: string;
    err?: string;
}
const html = `
  <html>
    <head>
    </head>
    <body>

      <div id="root"></div>
      <script>  
window.addEventListener('message',(event)  => {
try { 
  eval(event.data); 
} catch (err) {
  const root = document.querySelector('#root');
  root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>'
  console.error(err);
  
}
}, false)      </script>
    </body>

  </html>
`;
const Preview: React.FC<PreviewProps> = ({ code }) => {
    const iframe = useRef<any>();
    useEffect(() => {
        iframe.current.srcdoc = html; // srcdoc is a property that we can use to set the html of an iframe
        iframe.current.contentWindow.postMessage(code, '*') // '*' means send to any domain 
    }, [code]);

    return <iframe title="preview" srcDoc={html} ref={iframe} className="border border-red-500" sandbox="allow-scripts" />
};
export default Preview;