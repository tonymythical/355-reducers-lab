import { PRESETS } from "./presets.js";

export const initialEditor = {
  photo: "fjord",
  preset: "original",
  brightness: 100,
  contrast: 100,
  saturation: 100,
  sepia: 0,
  rotation: 0,
  flipped: false,
};

export function editorReducer(editor, action) {
  switch (action.type) {
    case "slider_moved":
      return { ...editor, [action.name]: action.value, preset: "custom" };

    case "preset_chosen":
      return { ...editor, ...PRESETS[action.preset], preset: action.preset };

    case "rotated_left":
      return {
        ...editor,
        rotation: editor.rotation === 0 ? 270 : editor.rotation - 90,
      };

    case "rotated_right":
      return {
        ...editor,
        rotation: editor.rotation === 270 ? 0 : editor.rotation + 90,
      };

    case "flip_toggled":
      return { ...editor, flipped: !editor.flipped };

    case "straightened":
      return { ...editor, rotation: 0, flipped: false };

    case "photo_chosen":
      return { ...initialEditor, photo: action.photo };

    case "edits_reset":
      return { ...initialEditor, photo: editor.photo };

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}