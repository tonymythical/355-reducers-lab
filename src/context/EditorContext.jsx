import { createContext, useContext, useReducer } from "react";

import { editorReducer, initialEditor } from "../state/editorReducer.js";

export const EditorContext = createContext(null);

export function EditorProvider({ children }) {
  const [editor, dispatch] = useReducer(editorReducer, initialEditor);

  return <EditorContext value={{ editor, dispatch }}>{children}</EditorContext>;
}

export function useEditor() {
  const value = useContext(EditorContext);

  if (value === null) {
    throw new Error("useEditor must be used inside an EditorProvider");
  }

  return value;
}