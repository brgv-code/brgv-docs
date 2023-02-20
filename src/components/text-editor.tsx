import MDEditor  from "@uiw/react-md-editor"
import { useState } from "react";
function TextEditor() {
    const [editMode, setEditMode] = useState(false);

    if(editMode) {
        return (
            <div className="container">
                <MDEditor
                />
            </div>
        );
    }

  return (
        <div onClick={() => setEditMode(true)}>
          <MDEditor.Markdown source={'# value'} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
  );
}

export default TextEditor