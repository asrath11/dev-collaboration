import { useRef } from 'react';
import Editor from '@monaco-editor/react';
import { useFileStore } from '../../stores/useFileStore';

function CodeEditor() {
  const editorRef = useRef(null);
  const { selectedActiveItem } = useFileStore();

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
  }

  function handleEditorChange(value: string | undefined) {
    if (value !== undefined) {
      console.log(value);
    }
  }

  return (
    <Editor
      defaultLanguage='javascript'
      value={selectedActiveItem?.content || ''}
      onChange={handleEditorChange}
      onMount={handleEditorDidMount}
      height={'100%'}
      width={'100%'}
      theme='vs-dark'
      options={{
        minimap: {
          enabled: true,
        },
        fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true,
        readOnly: false,
      }}
    />
  );
}

export default CodeEditor;
