import { useEditor } from "../context/EditorContext.jsx";

function ToolButtons() {
  const { dispatch } = useEditor();

  return (
    <div className="tools">
      <button type="button" onClick={() => dispatch({ type: "rotated_left" })}>
        ↺ Rotate left
      </button>
      <button type="button" onClick={() => dispatch({ type: "rotated_right" })}>
        ↻ Rotate right
      </button>
      <button type="button" onClick={() => dispatch({ type: "flip_toggled" })}>
        ⇆ Flip
      </button>
      <button type="button" onClick={() => dispatch({ type: "straightened" })}>
        Straighten
      </button>
      <button
        type="button"
        className="tools-reset"
        onClick={() => dispatch({ type: "edits_reset" })}
      >
        Reset
      </button>
    </div>
  );
}

export default ToolButtons;